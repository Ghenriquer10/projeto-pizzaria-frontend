import { useState } from 'react';
import { canSSRAuth } from '../../utils/canSSRAuth';
import Head from 'next/head';
import style from './dashboard.module.scss';
import { Header } from '../../components/Header';
import { FiRefreshCcw } from 'react-icons/fi'
import { setupApiClient } from '../../services/api';

type OrderItem = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | number
}

interface HomeProps {
    orders: OrderItem[]
}



export default function Dashboard({ orders }: HomeProps) {

    const [orderList, setOrderList] = useState(orders || [])

    function handleDetailsTable(id: string) {
        alert('Id clicado:' + id)
    }

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

                        {orderList.map((item) => {
                            return (
                                <section key={item.id} className={style.listItem}>
                                    <button onClick={() => handleDetailsTable(item.id)}>
                                        <div className={style.tag}></div>
                                        <span>Mesa: {item.table}</span>
                                    </button>
                                </section>
                            )
                        })}
                    </article>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apiClient = setupApiClient(ctx)

    const response = await apiClient.get('/orders')

    return {
        props: {
            orders: response.data
        }
    }
})