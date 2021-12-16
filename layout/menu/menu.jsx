import { BtnUjian } from "../../components/button/button"
import { Title } from "../../components/typography/typo"
import { MenuWrap, MenuContent } from "./menu.style"

import Link from "next/link"

const MenuLayout = () => {
    return(
        <MenuWrap>
            <MenuContent>
                <Title txSize="6rem">
                Selamat datang di ujian
                </Title>
                <Title>Mata Pelajaran Agama Islam</Title>
                <Title txMargin="30px">Silakan pilih bagian yang ingin dikerjakan terlebih dahulu</Title>
                <Link href="/ujian/pilihanganda">
                    <BtnUjian btnMargin="20px" btnWidth="200px" btnHeight="50px">Pilihan Ganda</BtnUjian>
                </Link>
                <br/>
                <BtnUjian btnWidth="200px" btnHeight="50px">Essay</BtnUjian>
            </MenuContent>
        </MenuWrap>
    )
}

export default MenuLayout