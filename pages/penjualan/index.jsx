import Head from "next/head";
import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import("../../layout/penjualan/penjualan"),
    { ssr: false }
)

const LoginSiswaPage = () =>{
    return(
        <>
        <Head>
            <title>Penjualan</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginSiswaPage