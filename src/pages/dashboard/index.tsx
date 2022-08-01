import { useState } from 'react';
import { canSSRAuth } from '../../utils/canSSRAuth';
import Head from 'next/head';
import style from './dashboard.module.scss';
import { Header } from '../../components/Header';
import { FiRefreshCcw } from 'react-icons/fi'
import { setupApiClient } from '../../services/api';
import Modal from 'react-modal';
import { ModalOrder } from '../../components/ModalOrder';
import { toast } from 'react-toastify';

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

export type OrderItemProps = {
    id: string;
    amount: string;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    }
    order: {
        id: string;
        table: string | number;
        status: boolean;
        name: string;
    }
}



export default function Dashboard({ orders }: HomeProps) {

    const [orderList, setOrderList] = useState(orders || [])

    const [modalItem, setModalItem] = useState<OrderItemProps[]>()

    const [modalVisible, setModaVisible] = useState(false)

    function handleModal() {
        setModaVisible(prev => !prev)
    }

    async function handleFinishOrder(id: string) {
        const apiClient = setupApiClient();
        await apiClient.put('/order/finish', {
            order_id: id
        })

        const response = await apiClient.get('/orders')
        setOrderList(response.data)
        toast.success('Pedido finalizado com sucesso!')
        setModaVisible(false)
    }

    async function handleDetailsTable(id: string) {

        const setupClient = setupApiClient();

        const response = await setupClient.get('/order/detail', {
            params: {
                order_id: id
            }
        })

        setModalItem(response.data)
        console.log(response.data)
        setModaVisible(true)
    }

    async function handleRefreshOrders() {
        const apiClient = setupApiClient();
        const response = await apiClient.get('/orders')

        setOrderList((await response).data)
    }

    Modal.setAppElement('#__next');

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
                        <button><FiRefreshCcw onClick={handleRefreshOrders} size={25} color="#3fffa3" /></button>
                    </div>
                    <article className={style.listOrders}>

                        {orderList.length === 0 && (
                            <span className={style.emptyList}>
                                Nenhum pedido aberto foi encontrado!
                            </span>
                        )}

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
                {modalVisible && (
                    <ModalOrder
                        isOpen={modalVisible}
                        onRequestClose={handleModal}
                        order={modalItem}
                        handleFinishOrder={handleFinishOrder}
                    />
                )}
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