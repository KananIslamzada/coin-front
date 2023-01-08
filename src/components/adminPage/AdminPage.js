import classes from "./AdminPage.module.css";

import Button from "../UI/Button";
import NewCoinForm from "../newCoin/NewCoinForm";
import { useCallback } from "react";

const AdminPage = ({ loginHandler }) => {
    const buttonClickHandler = useCallback(() => {
        loginHandler(false);
    }, [loginHandler]);
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <Button onClick={buttonClickHandler}>Logout</Button>
                </nav>
            </header>
            <main>
                <NewCoinForm />
            </main>
        </>
    );
};

export default AdminPage;
