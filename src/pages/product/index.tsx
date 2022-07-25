import React, { FormEvent, useState, ChangeEvent } from 'react'
import Head from "next/head";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './product.module.scss'
import { FiUpload } from 'react-icons/fi'

export default function Product() {

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null)

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return
        }

        const image = e.target.files[0];

        if (!image) {
            return
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

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
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={25} color={'#fff'} />
                            </span>
                            <input type={'file'} accept="image/png, image/jpeg" onChange={handleFile} />
                            {avatarUrl && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt='Foto do produto'
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>
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