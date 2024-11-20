import { createContext, useState } from "react"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, SetloggedUser] = useState('logeao')
    const login = user => SetloggedUser(user)
    const logout = () => SetloggedUser(undefined)

    return (
        <AuthContext.Provider value={{ loggedUser, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )


}
export { AuthContext, AuthProviderWrapper }