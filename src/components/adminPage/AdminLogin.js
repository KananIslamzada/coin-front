import classes from "./Login.module.css";

import { useRef } from "react";

const AdminLogin = ({ loginHandler }) => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        if (name === "admin" && password === "admin") {
            loginHandler(true);
        }
    };

    return (
        <main>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="password" ref={passwordRef} placeholder="password" />
                <button>Log In</button>
            </form>
        </main>
    );
};

export default AdminLogin;
