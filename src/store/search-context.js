import { createContext, useState } from "react";
import QueryProvider from "../hooks/useQuery";

export const searchContext = createContext({
    name: "",
    setName: (name) => { }
});

const ContextProvider = ({ children }) => {
    const [name, setName] = useState("");

    const nameChangeHandler = (name) => {
        setName(name);
    };
    const contextValue = {
        name,
        setName: nameChangeHandler
    };
    return (
        <searchContext.Provider value={contextValue}>
            <QueryProvider>{children}</QueryProvider>
        </searchContext.Provider>
    );
};

export default ContextProvider;
