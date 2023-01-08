import { Link } from "react-router-dom";
import classes from "./CoinDescription.module.css";

const CoinDescription = ({ name, desc, features }) => {
    return (
        <div className={classes.descContainer}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <table className={classes.table}>
                <tbody>
                    <tr>
                        <td>Issuing Country</td>
                        <td>{features?.country}</td>
                    </tr>
                    <tr>
                        <td>Composition</td>
                        <td>{features?.composition}</td>
                    </tr>
                    <tr>
                        <td>Quality</td>
                        <td>{features?.quality}</td>
                    </tr>
                    <tr>
                        <td>Denomination</td>
                        <td>{features?.denonimation}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{features?.year}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{features?.weight}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{features?.price}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Back To Home Page</Link>
        </div>
    );
};

export default CoinDescription;
