import classes from "./CoinList.module.css";
import AboutCoin from "./AboutCoin";
import NotFound from "../UI/NotFound";
const CoinList = ({ data }) => {
    return (
        <div className={classes.container}>
            {data.length !== 0 ? (
                data.map(({ photos, description, name, _id }) => (
                    <AboutCoin
                        key={_id}
                        name={name}
                        desc={description}
                        img={photos[0]}
                        id={_id}
                    />
                ))
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default CoinList;
