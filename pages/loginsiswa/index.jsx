import Head from "next/head";
import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import('../../layout/loginsiswa/loginsiswa'),
    { ssr: false }
)

const LoginSiswaPage = () =>{
    return(
        <>
        <Head>
            <title>Login Siswa</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default LoginSiswaPage