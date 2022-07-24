import { FormEvent, useContext, useState } from 'react'
import Head from "next/head";
import Image from "next/image";
import style from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import { Input } from '../components//ui/Input'
import { Button } from "../components/ui/Button";
import { AuthContext } from '../contexts/AuthContext';
import Link from "next/link";
import { toast } from 'react-toastify';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === "" && password === "") {
      toast.warning("Preencha todos os campos!")
      return
    }

    setLoading(true)

    let data = {
      email,
      password
    }
    await signIn(data)

    setLoading(true)
  }

  return (
    <>
      <Head>
        <title>Sujeito Pizzaria - Login</title>
      </Head>
      <div className={style.containerCenter}>
        <Image src={logoImg} alt="Imagem sujeito pizzaria" />
        <div className={style.login}>
          <form onSubmit={handleLogin}>

            <Input
              placeholder="Digite seu e-maiil"
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>
          <Link href={"/signup"}>
            <a className={style.register}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (context) => {
  return {
    props: {}
  }
})