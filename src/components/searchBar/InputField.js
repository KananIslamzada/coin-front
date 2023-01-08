import classes from "./InputField.module.css";

import { useCallback, useContext, useId, useRef } from "react";
import Button from "../UI/Button";
import { searchContext } from "../../store/search-context";
import { useNavigate } from "react-router-dom";

const InputField = () => {
    const inputId = useId();
    const inputRef = useRef();

    const searchCtx = useContext(searchContext);

    const navigate = useNavigate();

    const buttonClickHandler = useCallback(() => {
        searchCtx.setName(inputRef.current.value);
        navigate("/search");
    }, [searchCtx, navigate]);

    return (
        <div className={classes.inputField}>
            <label htmlFor={inputId}>Search by name</label>
            <div className={classes.inputContainer}>
                <input type="text" id={inputId} ref={inputRef} placeholder="Name" />
                <Button onClick={buttonClickHandler}>Search</Button>
            </div>
        </div>
    );
};

export default InputField;
