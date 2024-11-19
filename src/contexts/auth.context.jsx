import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [loggedUSer, SetLoggedUSer] = useState(null);

    const login = (user) => SetLoggedUSer(user);
    const logout = () => SetLoggedUSer(null);

    return (
        <AuthContext.Provider value={{ loggedUSer, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };
