import { createContext, ReactNode, useState } from 'react';
import { destroyCookie } from 'nookies';
import Router from 'next/router'

type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean;
    signIn: (credentials: SingInProps) => Promise<void>
    signOut: () => void;
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

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch {
        console.log('Erro ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderPros) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SingInProps) {
        console.log(email)
        console.log(password)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}