import { Outlet } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <h1>List Of the Coins</h1>
                </div>
                <SearchBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
