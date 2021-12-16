import dynamic from 'next/dynamic'
import Head from "next/head";

const Pages = dynamic(
    () => import('../../layout/menu/menu'),
    { ssr: false }
)

const Ujian = () => {
    return(
        <>
        <Head>
            <title>Menu</title>
            <meta charset="UTF-8" />
        </Head>
        <Pages/>
        </>
    )
}

export default Ujian