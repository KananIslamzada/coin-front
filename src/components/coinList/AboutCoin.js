import { Link } from "react-router-dom";
import getSenteces from "../../utils/getSentences";
import classes from "./AboutCoin.module.css";

const AboutCoin = ({ img, name, desc, id }) => {
    const shortDesc = getSenteces(desc, 2);

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <img src={img} alt="coin" />
            </div>
            <div className={classes.right}>
                <Link to={`/coin/${id}`}>{name}</Link>
                <p>{shortDesc}</p>
            </div>
        </div>
    );
};

export default AboutCoin;
