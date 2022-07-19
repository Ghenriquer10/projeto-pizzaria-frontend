import { createContext, ReactNode, useState } from 'react'

type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean;
    signIn: (credentials: SingInProps) => Promise<void>
}

type UserProps = {
    id: string,
    name: string,
    email: string
}

type SingInProps = {
    email: string,
    password: string
}

type AuthProviderPros = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderPros) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn() {
        alert('Clicou no signIn')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}