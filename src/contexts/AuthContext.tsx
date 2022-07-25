import { createContext, ReactNode, useEffect, useState } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router'
import { api } from '../services/apiClient'
import { toast } from 'react-toastify';

type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean;
    signIn: (credentials: SingInProps) => Promise<void>
    signOut: () => void;
    signUp: (credentials: SingUpProps) => Promise<void>;
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

type SingUpProps = {
    name: string,
    email: string,
    password: string
}
type AddCategoryProps = {
    category: string
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

    // Atrvés do useEffect é persistido os dados do usuário, e caso o usuário tenha manipulado seu cookies, o mesmo é deslogado
    // da aplicação

    useEffect(() => {
        //Pegando cookie do usuário

        const { '@nextauth.token': token } = parseCookies();

        if (token) {
            api.get('/userinfo').then(response => {
                const { id, name, email } = response.data;
                setUser({
                    id,
                    name,
                    email
                })
            })
                .catch(() => {
                    signOut();
                })
        }

    }, [])

    async function signIn({ email, password }: SingInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            })


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

            toast.success("Logado com sucesso!")

            // Redirecionar usuário para os últimos pedidos
            Router.push('dashboard')

        } catch (err) {
            toast.error("Erro ao acessar!")
            console.log("Erro ao acessar", err)
        }
    }

    async function signUp({ name, email, password }: SingUpProps) {
        try {

            const response = await api.post('/users', {
                name,
                email,
                password
            })

            toast.success("Cadastrado com sucesso!")

            Router.push('/')

        } catch (error) {
            toast.error("Erro ao cadastrar!")
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}