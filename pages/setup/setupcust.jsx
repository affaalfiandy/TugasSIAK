import Head from "next/head";
import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import("../../layout/setup/setupcustomer"),
    { ssr: false }
)

const LoginSiswaPage = () =>{
    return(
        <>
        <Head>
            <title>SetUp Customer</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginSiswaPage