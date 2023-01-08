import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery
} from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const QueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
    );
};

const getCoinsByCategory = async (category) => {
    const res = await axios(`http://localhost:3001/coins/categories/${category}`);
    return res.data;
};

export const useGetCategories = (categoryName) => {
    return useQuery(["categories", categoryName], () =>
        getCoinsByCategory(categoryName)
    );
};

const getCoinById = async (id) => {
    const res = await axios(`http://localhost:3001/coins/${id}`);
    return res.data;
};

export const useGetCoinById = (coinId) => {
    return useQuery(["coin", coinId], () => getCoinById(coinId));
};

const uploadCoin = async (data) => {
    const res = axios.post("http://localhost:3001/coins", data);
    return res.data;
};

export const useSaveCoin = () => {
    return useMutation(uploadCoin);
};

const getCoinByName = async (name) => {

    const res = await axios.post(`http://localhost:3001/coins/coins`, { name: name });
    return res.data;
};

export const useGetCoinByName = (name) => {
    return useQuery(["coin", name], () => getCoinByName(name));
};

export default QueryProvider;
