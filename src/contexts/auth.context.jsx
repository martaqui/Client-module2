import { createContext, useState } from "react";

const AuthContext = createContext()

function AuthProviderWraper(props) {

    const [loggedAdmin, setLoggedAdmin] = useState()

    return (
        <AuthContext.Provider value={{ loggedAdmin, setLoggedAdmin }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProviderWraper }