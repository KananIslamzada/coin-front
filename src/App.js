import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/UI/Loader";
import "./styles.css";

const MainPage = lazy(() => import("./pages/MainPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const CoinPage = lazy(() => import("./pages/CoinPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));


export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories/:name" element={<CategoriesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Suspense>
  );
}
