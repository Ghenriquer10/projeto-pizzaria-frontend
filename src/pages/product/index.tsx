import React, { FormEvent, useState } from 'react'
import Head from "next/head";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './product.module.scss'

export default function Product() {

    async function handleProduct(event: FormEvent) {
        event.preventDefault()
        alert('clicou')
    }

    return (
        <>
            <Head>
                <title>Novo produto - Pizzaria</title>
            </Head>

            <div>
                <Header />

                <main className={styles.container}>
                    <h1>Cadastrar produto</h1>
                    <form onSubmit={handleProduct} className={styles.form}>
                        <select>
                            <option>Selecione a categoria</option>
                            <option>Bebida</option>
                            <option>Pizza</option>
                            <option>Pinga</option>
                            <option>Sobremesa</option>
                        </select>
                        <input placeholder='Nome do item' />
                        <input placeholder='Valor' />
                        <input placeholder='Descrição' />
                        <button className={styles.button} type='submit'>Cadastrar</button>
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