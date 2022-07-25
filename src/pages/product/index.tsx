import React, { FormEvent, useState, ChangeEvent } from 'react'
import Head from "next/head";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './product.module.scss'
import { FiUpload } from 'react-icons/fi'
import { setupApiClient } from '../../services/api';

type ItemProps = {
    id: string,
    name: string
}

interface CategoryProps {
    categoryList: ItemProps[]
}

export default function Product({ categoryList }: CategoryProps) {

    console.log(categoryList)

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null)

    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState(0)

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

    function handleCategorySelected(event) {
        //console.log('categoria selecionada', categories[event.target.value])
        setCategorySelected(event.target.value)
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
                        <select value={categorySelected} onChange={handleCategorySelected}>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
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
    const apiClient = setupApiClient(ctx)

    const response = await apiClient.get('/category')

    console.log(response.data)
    return {
        props: {
            categoryList: response.data
        }
    }
})