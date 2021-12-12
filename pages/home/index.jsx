import dynamic from 'next/dynamic'

const Pages = dynamic(
    () => import('../../layout/homescreen/homescreen'),
    { ssr: false }
)

const HomePage = () => {
    return(
        <Pages/>
    )
}

export default HomePage