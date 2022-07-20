import axios, { AxiosError } from "axios";
import { parseCookies } from 'nookies'
import { AuthTokenError } from "./error/AuthTokenError";
import { signOut } from "../contexts/AuthContext";

export function setupApiClient(context = undefined) {

    let cookies = parseCookies(context)

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })
    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            // Qualquer error 401 do tipo não autorizado deslogará o usuário.

            if (typeof window !== undefined) {
                // Chama função que desloga usuário
                signOut()
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error)
    })

    return api;
}