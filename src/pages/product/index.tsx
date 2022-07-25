import React, { FormEvent, useState, ChangeEvent } from 'react'
import Head from "next/head";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './product.module.scss'
import { FiUpload } from 'react-icons/fi'
import { setupApiClient } from '../../services/api';
import { toast } from 'react-toastify';

type ItemProps = {
    id: string,
    name: string
}

interface CategoryProps {
    categoryList: ItemProps[]
}

export default function Product({ categoryList }: CategoryProps) {

    console.log(categoryList)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    // Tratando o envio de imagens
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null)

    // Tratando a seleção de uma categoria
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
        try {
            const data = new FormData();

            if (name === '' || price === '' || description === '' || imageAvatar === null) {
                toast.warning('Preencha todos os campos!')
                return;
            }

            data.append('name', name);
            data.append('price', price);
            data.append('description', description);
            data.append('file', imageAvatar);
            data.append('category_id', categories[categorySelected].id);

            const apiClient = setupApiClient();

            await apiClient.post('/product', data)
            toast.success('Produto cadastrado com sucesso!')


        } catch (err) {
            console.log(err)
            toast.error('Erro ao cadastrar produto!')
        }

        setName('');
        setPrice('');
        setDescription('');
        setImageAvatar(null);
        setAvatarUrl('');
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
                        <input
                            placeholder='Nome do item'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            placeholder='Valor'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <input
                            placeholder='Descrição'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
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

    return {
        props: {
            categoryList: response.data
        }
    }
})