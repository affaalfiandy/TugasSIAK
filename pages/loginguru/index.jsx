import Head from "next/head";
import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import('../../layout/loginguru/loginguru'),
    { ssr: false }
)
const LoginGuruPage = () =>{
    return(
        <>
        <Head>
            <title>Login Guru</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginGuruPage