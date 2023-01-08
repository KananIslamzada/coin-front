import CoinCategoryNavigate from "./CoinCategoryNavigate";
import classes from "./MainPageLayout.module.css";
import firstimg from "../images/first.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { searchContext } from "../../store/search-context";

const MainPageLayout = () => {
    const [coins, setCoins] = useState([])

    const searchCtx = useContext(searchContext)



    const getData = async () => {
        const res = await axios.post("http://localhost:3001/coins/coins");
        const data = await res.data;
        setCoins(data)
    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        setCoins(coins => coins.filter(item => item?.name?.includes(searchCtx.name)))

    }, [searchCtx.name])

    return (
        <div className={classes.container}>
            {coins.map(item => {
                return <CoinCategoryNavigate img={item?.photos?.[0]} name={item?.name} />
            })}
        </div>
    );
};

export default MainPageLayout;
