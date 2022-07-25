import React, { useState, FormEvent } from 'react'
import Head from "next/head";
import { Header } from "../../components/Header";
import styles from './category.module.scss'
import { toast } from 'react-toastify';
import { setupApiClient } from '../../services/api';
import { canSSRAuth } from '../../utils/canSSRAuth';


export default function Category() {

    const [category, setCategory] = useState('');


    async function handleCategory(event: FormEvent) {
        event.preventDefault()
        if (category === '') {
            toast.warning('Preencha o campo corretamente!')
            return
        }

        const apiClient = setupApiClient();

        try {
            await apiClient.post('/category', {
                name: category
            })
            setCategory('')
            toast.success('Produto cadastrado com sucesso!')
        } catch (error) {
            toast.error('Erro ao cadastrar produto!', error)
        }
    }

    return (
        <>
            <Head>
                <title>Categorias - Pizzaria</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar categoria:</h1>
                    <form className={styles.form} onSubmit={handleCategory}>
                        <input
                            type="text"
                            placeholder="Digite o nome da categoria"
                            className={styles.input}
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                        <button
                            className={styles.button}
                            type="submit">Cadastrar categoria
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {

        }
    }
})