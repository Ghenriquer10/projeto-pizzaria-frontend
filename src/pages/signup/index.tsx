import Head from "next/head";
import Image from "next/image";
import style from '../../../styles/home.module.scss';
import logoImg from '../../../public/logo.svg';
import { Input } from '../../components//ui/Input'
import { Button } from "../../components/ui/Button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Faça seu cadastro</title>
            </Head>
            <div className={style.containerCenter}>
                <Image src={logoImg} alt="Imagem sujeito pizzaria" />
                <div className={style.login}>
                    <h1>Criando sua conta</h1>
                    <form>
                        <Input
                            placeholder="Digite seu nome"
                            type={"text"}
                        />

                        <Input
                            placeholder="Digite seu e-mail"
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
                            Cadastrar
                        </Button>
                    </form>
                    <Link href={"/"}>
                        <a className={style.register}>Já possui uma conta? Faça login</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
