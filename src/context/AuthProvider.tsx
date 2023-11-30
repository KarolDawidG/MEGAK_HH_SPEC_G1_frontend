import {createContext, FC, ReactElement, useState} from "react";
import {UserInterface} from "../interfaces/UserInterface";

type AuthChildren = {children: ReactElement};

const AuthContext = createContext({});

export const AuthProvider: FC<AuthChildren> = ({children})=> {

    const [auth, setAuth] = useState<UserInterface | null>(null);
    return <>
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    </>
}

export default AuthContext;
