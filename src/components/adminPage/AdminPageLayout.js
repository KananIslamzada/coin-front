import { useCallback } from "react";
import useLogin from "../../hooks/useLogin";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";

const AdminPageLayout = () => {
    const [logged, setLogged] = useLogin();
    const loginHandler = useCallback(
        (data) => {
            setLogged(data);
        },
        [setLogged]
    );

    if (!logged) {
        return <AdminLogin loginHandler={loginHandler} />;
    }

    return <AdminPage loginHandler={loginHandler} />;
};

export default AdminPageLayout;
