import { createContext, ReactNode, useState } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router'
import { api } from '../services/apiClient'

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
        try {
            const response = await api.post('/session', {
                email,
                password
            })
            //console.log(response.data)

            const { name, id, token } = response.data

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // Expirar em um mês
                path: "/"
            })

            setUser({
                id,
                name,
                email
            })

            // Enviando token a todas futuras requisições
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            // Redirecionar usuário para os últimos pedidos
            Router.push('dashboard')


        } catch (err) {
            console.log("Erro ao acessar", err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}