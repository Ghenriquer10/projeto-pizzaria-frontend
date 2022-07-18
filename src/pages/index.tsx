import Head from "next/head";
import Image from "next/image";
import style from '../../styles/home.module.scss';
import logoImg from '../../public/logo.svg';
import { Input } from '../components//ui/Input'
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizzaria - Login</title>
      </Head>
      <div className={style.containerCenter}>
        <Image src={logoImg} alt="Imagem sujeito pizzaria" />
        <div className={style.login}>
          <form>

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
        </div>
      </div>
    </>
  )
}
