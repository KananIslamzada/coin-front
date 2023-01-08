import classes from "./CoinPhotos.module.css";

const CoinPhotos = ({ img }) => {
    return (
        <div className={classes.imgContainer}>
            <img src={img[0]} alt="coin" />
            <img src={img[1]} alt="coin" />
        </div>
    );
};

export default CoinPhotos;
