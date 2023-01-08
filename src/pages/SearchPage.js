import { useContext } from "react";
import CoinList from "../components/coinList/CoinList";
import Loader from "../components/UI/Loader";
import { useGetCoinByName } from "../hooks/useQuery";
import { searchContext } from "../store/search-context";

const SearchPage = () => {
    const { name } = useContext(searchContext);
    const { data, isLoading, isError, error } = useGetCoinByName(name);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return alert(error);
    }

    return <CoinList data={data} />;
};

export default SearchPage;
