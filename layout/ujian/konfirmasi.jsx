import { BtnBlue, BtnGray } from "../../components/button/button"
import { Title } from "../../components/typography/typo"
import { PageConfirmWrapper, PageConfirmContent, BtnWrapper } from "./konfirmasi.style"
import Link from "next/link"
import Router from "next/router"

const KonfirmasiPage = () => {
    const backHandler = (e) =>{
        e.preventDefault;
        Router.back()
    }

    return(
        <PageConfirmWrapper>
            <PageConfirmContent>
                <Title>Selamat! kamu sudah selesai mengerjakan soal ujian </Title>
                <Title txMargin="40px 0 0 0" txSize="2rem"> Apakah kamu sudah yakin?</Title>
                <BtnWrapper>
                    <BtnGray btnMargin="50px 10px 0 0" btnWidth="200px" onClick={backHandler}>
                        Belum<br/>(Kembali)
                    </BtnGray>
                    <Link href="\menu">
                    <BtnBlue btnMargin="50px 10px 0 0" btnWidth="200px">
                        Sudah<br/>(submit)
                    </BtnBlue>
                    </Link>
                </BtnWrapper>
            </PageConfirmContent>
        </PageConfirmWrapper>
    )
}

export default KonfirmasiPage