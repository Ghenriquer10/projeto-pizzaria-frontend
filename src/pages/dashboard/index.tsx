import { canSSRAuth } from '../../utils/canSSRAuth';
import Head from 'next/head';
import style from './dashboard.module.scss';
import { Header } from '../../components/Header';
import { FiRefreshCcw } from 'react-icons/fi'

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Painel - Pizzaria</title>
            </Head>
            <div>
                <Header />
                <main className={style.container}>
                    <div className={style.containerHeader}>
                        <p>Últimos pedidos</p>
                        <button><FiRefreshCcw size={25} color="#3fffa3" /></button>
                    </div>
                    <article className={style.listOrders}>
                        <section className={style.listItem}>
                            <button>
                                <div className={style.tag}></div>
                                <span>Mesa 50</span>
                            </button>
                        </section>
                        <section className={style.listItem}>
                            <button>
                                <div className={style.tag}></div>
                                <span>Mesa 40</span>
                            </button>
                        </section>
                    </article>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})