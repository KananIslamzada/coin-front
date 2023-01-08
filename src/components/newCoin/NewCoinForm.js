import classes from "./style.module.css";

import { useRef } from "react";
import AdditionalFeatures from "./AdditionalFeatures";
import MainFeatures from "./MainFeatures";
import Button from "../UI/Button";
import { useSaveCoin } from "../../hooks/useQuery";

const NewCoin = () => {
    const mainFeatureRef = useRef();
    const additionalFeatureRef = useRef();

    const { data, mutate, isError, isSuccess, error } = useSaveCoin();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const { photos, ...mainFeatures } = mainFeatureRef.current.getData();
        const additionalFeatures = additionalFeatureRef.current.getData();
        if (photos.length !== 2) {
            return alert("only two images");
        }

        const formData = new FormData();
        formData.append("firstPhoto", photos[0]);
        formData.append("secondPhoto", photos[1]);

        formData.append("features", JSON.stringify(additionalFeatures));

        for (let data in mainFeatures) {
            formData.append(data, mainFeatures[data]);
        }

        mutate(formData);
        mainFeatureRef.current.clearData();
        additionalFeatureRef.current.clearData();
    };

    if (isError) {
        alert(error);
        return <h2>Something went wrong</h2>;
    }

    if (isSuccess) {
        alert(data);
    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <MainFeatures ref={mainFeatureRef} />
            <AdditionalFeatures ref={additionalFeatureRef} />
            <Button>Submit</Button>
        </form>
    );
};
export default NewCoin;
