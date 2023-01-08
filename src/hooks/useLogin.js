import { useState } from "react";

const useLogin = () => {
    const defaultLogged = JSON.parse(localStorage.getItem("logged"));
    const [loggedIn, setLoggedIn] = useState(defaultLogged);
    const setLogged = (data) => {
        setLoggedIn(data);
        localStorage.setItem("logged", data);
    };
    return [loggedIn, setLogged];
};

export default useLogin;
