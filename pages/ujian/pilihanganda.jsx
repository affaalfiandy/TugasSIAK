import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import("../../layout/ujian/PilihanGanda"),
    { ssr: false }
)

const Ujian = () => {
    return(
        <Pages/>
    )
}

export default Ujian