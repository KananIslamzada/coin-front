import { useParams } from "react-router-dom";
import CoinDesc from "../components/coinDesc/CoinDescriptionLayout";
import { useGetCoinById } from "../hooks/useQuery";

import CircularProgress from "@mui/material/CircularProgress";

const CoinPage = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetCoinById(id);

    if (isLoading || isFetching) {
        return <CircularProgress color="secondary" />;
    }

    if (isError) {
        return <h2>Something Went Wrong</h2>;
    }

    return <CoinDesc data={data} />;
};

export default CoinPage;
