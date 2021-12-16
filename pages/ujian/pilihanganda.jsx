import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import("../../layout/ujian/ujian"),
    { ssr: false }
)

const Ujian = () => {
    return(
        <Pages/>
    )
}

export default Ujian