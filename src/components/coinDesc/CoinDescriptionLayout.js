import classes from "./CoinDescriptionLayout.module.css";
import CoinPhotos from "./CoinPhotos";
import CoinDescription from "./CoinDescription";
const CoinDesc = ({ data }) => {
    return (
        <div className={classes.container}>
            <CoinPhotos img={data.photos} />
            <CoinDescription
                name={data.name}
                desc={data.description}
                features={data.features}
            />
        </div>
    );
};

export default CoinDesc;
