import { Html, Head, Main, NextScript } from 'next/document'

// Com o document fazemos com que a aplicação seja renderizada apenas uma vez

export default function Document() {
    return (
        <Html>
            <Head>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}