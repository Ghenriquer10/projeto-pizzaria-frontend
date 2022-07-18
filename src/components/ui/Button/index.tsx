import { ReactNode, ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode
}

import styles from './styles.module.scss';

export function Button({ children, loading, ...rest }: ButtonProps) {
    return (
        <button
            disabled={loading}
            className={styles.button}
            {...rest}
        >
            {loading ? (
                <FaSpinner />
            ) : (
                <a className={styles.buttonText}>
                    {children}
                </a>
            )}
        </button>
    )
}