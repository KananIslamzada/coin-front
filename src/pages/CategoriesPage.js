import { useParams } from "react-router-dom";
import CoinList from "../components/coinList/CoinList";
import { useGetCategories } from "../hooks/useQuery";

import CircularProgress from "@mui/material/CircularProgress";

const CategoriesPage = () => {
    const { name } = useParams();
    const { data, isLoading, isFetching, isError } = useGetCategories(name);

    if (isLoading || isFetching) {
        return <CircularProgress color="secondary" />;
    }
    if (isError) {
        return <h2>Something went wrong</h2>;
    }
    return <CoinList data={data} />;
};

export default CategoriesPage;
