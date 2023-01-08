import classes from "./Loader.module.css";

import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
    return (
        <div className={classes.loaderContainer}>
            <CircularProgress color="secondary" />
        </div>
    );
};

export default Loader;
