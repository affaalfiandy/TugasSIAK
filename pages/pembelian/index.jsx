import Head from "next/head";
import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import('../../layout/kasir/kasir'),
    { ssr: false }
)

const LoginSiswaPage = () =>{
    return(
        <>
        <Head>
            <title>Login Kasir</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginSiswaPage