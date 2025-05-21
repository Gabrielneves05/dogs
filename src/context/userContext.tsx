'use client';

import { createContext, useContext, useState } from "react";

type User = {
    id: number;
    nome: string;
    username: string;
    email: string;
}

type IUserContext = {
    user: User | null;
    setUserState: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
    const context = useContext(UserContext);
    if(context === null) {
        throw new Error('useContext must be used within a UserContextProvider');
    }

    return context;
}

export function UserContextProvider({ 
    children,
    user,
}: {
    children: React.ReactNode;
    user: User | null;
}) {
    const [userState, setUserState] = useState<User | null>(user);

    return (
        <UserContext.Provider value={{ user: userState, setUserState }}>
            {children}
        </UserContext.Provider>
    )
}