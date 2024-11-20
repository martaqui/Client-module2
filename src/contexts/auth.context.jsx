import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [loggedUser, SetloggedUser] = useState(null);

    const login = (user) => {
        SetloggedUser(user);
        console.log("User logged in:", user);
    };

    const logout = () => {
        SetloggedUser(null);
        console.log("User logged out");
    };

    return (
        <AuthContext.Provider value={{ loggedUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };
