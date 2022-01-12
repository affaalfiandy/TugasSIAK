import Head from "next/head";
import dynamic from 'next/dynamic'


const Pages = dynamic(
    () => import("../../layout/stok/stok"),
    { ssr: false }
)

const LoginSiswaPage = () =>{
    return(
        <>
        <Head>
            <title>SetUp</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginSiswaPage