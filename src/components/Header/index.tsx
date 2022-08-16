import { useContext } from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import Image from 'next/image'

export function Header() {
    const { signOut } = useContext(AuthContext)
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image src='logo.svg' width={190} height={60} alt={'Imagem do logo da pizzaria'} />
                </Link>
                <nav className={styles.navContent}>
                    <Link href="/">
                        <a>Pedidos</a>
                    </Link>

                    <Link href="/category">
                        <a>Categoria</a>
                    </Link>

                    <Link href="/product">
                        <a>Novo produto</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}