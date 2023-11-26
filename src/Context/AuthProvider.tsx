import {createContext, FC, ReactElement, useState} from "react";

type AuthChildren = {children: ReactElement};

const AuthContext = createContext({});

export const AuthProvider: FC<AuthChildren> = ({children})=> {

    const [auth, setAuth] = useState({})
    return <>
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    </>
}

export default AuthContext;
