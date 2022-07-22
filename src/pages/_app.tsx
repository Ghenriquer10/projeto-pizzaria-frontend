import '../../styles/globals.scss'
import { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Zoom } from 'react-toastify'

import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} transition={Zoom} draggable={false} />
    </AuthProvider>
  )
}

export default MyApp
