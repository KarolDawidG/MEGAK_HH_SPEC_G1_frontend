import React, { createContext, useState, FC, ReactElement, ReactNode  } from 'react';

interface AuthContextType {
    auth: UserInterface | null;
    setAuth: React.Dispatch<React.SetStateAction<UserInterface | null>>;
}

interface UserInterface {
    id: string;
    pwdHash: string;
    email: string;
    isActive: boolean;
    role: roleEnum;
    createdAt: string;
    registeredAt: string;
    token: string;
}

enum roleEnum {
    student = 0,
    hr = 1,
    admin = 2,
}
type AuthChildren = {children: ReactNode };

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthChildren> = ({children})=> {
    const [auth, setAuth] = useState<UserInterface | null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
