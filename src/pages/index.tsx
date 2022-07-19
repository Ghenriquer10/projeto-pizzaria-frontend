import { FormEvent, useContext } from 'react'
import Head from "next/head";
import Image from "next/image";
import style from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import { Input } from '../components//ui/Input'
import { Button } from "../components/ui/Button";
import { AuthContext } from '../contexts/AuthContext';
import Link from "next/link";

export default function Home() {

  const { signIn } = useContext(AuthContext)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    let data = {
      email: "teste@gmail.com",
      password: "123123"
    }

    await signIn(data)
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
            />

            <Input
              placeholder="Digite sua senha"
              type={"password"}
            />

            <Button
              type="submit"
              loading={false}
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
