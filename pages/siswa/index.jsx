import dynamic from "next/dynamic";
import Head from "next/head";

const Pages = dynamic(
    () => import('../../layout/siswa/siswa'),
    { ssr: false }
)

const Siswa = () =>{
    return(
        <>
        <Head>
            <title>Ruang Tunggu</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default Siswa