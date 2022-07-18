import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import style from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface TexteAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }


export function Input({ ...rest }: InputProps) {

    return (
        <input className={style.input} {...rest} />
    )
}

export function TexteArea({ ...rest }: TexteAreaProps) {
    return (
        <textarea className={style.input} {...rest} />
    )
}