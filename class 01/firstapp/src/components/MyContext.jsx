import { createContext, useContext, useState } from "react";

const MyContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [data] = useState({
        name: "ghayur",
        email: "ghayur@gmail.com"
    });
    return (
        <MyContext.Provider value={{ data }} >{children}</MyContext.Provider>
    );
}

export const useUser = () => useContext(MyContext);