import { canSSRAuth } from '../../utils/canSSRAuth';
import Head from 'next/head';
import style from './dashboard.module.scss';
import { Header } from '../../components/Header';

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Painel - Pizzaria</title>
            </Head>
            <div>
                <Header />
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})