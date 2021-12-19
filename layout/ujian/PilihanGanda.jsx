import { BtnBlue, BtnSoal, BtnGray } from "../../components/button/button"
import { PagePilganWrapper, PagePilganContent, SoalWraper, PilihanWrap, SoalContent, NomorWrapper, BtnWrap, BtnContent, TandaSoalContent } from "./PilihanGanda.style"
import { P } from "../../components/typography/typo"

import { useState } from "react"
import Link from "next/link"

const UjianLayout = () => {
    const pilihan = {
        A:"telur - nimfa - pupa - imago",
        B:"telur - larva - pupa - imago",
        C:"telur - nimfa - imago",
        D:"telur - imago - pupa"
        }
    const [check,setCheck] = useState(false)
    const choiceHandler = (e) => {
        e.preventDefault()
        console.log(e.id)
    }
    return(
        <PagePilganWrapper>
            <PagePilganContent>
            <P txMargin="0 0 20px 0"  txSize="1.5rem" txColor="black">Sisa Waktu : 30:56 menit</P>
            <SoalContent>
                <SoalWraper>
                    <P txColor="black" txSize="1.5rem">Tahapan daur hidup jangkrik yang tepat adalah ….</P>
                    <br/>
                    {Object.keys(pilihan).map((key, index) => 
                    <PilihanWrap>
                        <input type="radio" id={key} onClick={choiceHandler}/>
                        <label><P txColor="black" txMargin="-10px 0 10px 10px">{pilihan[key]}</P></label>
                        <br/>
                    </PilihanWrap>
                    )}
                </SoalWraper>
                <NomorWrapper>
                <BtnSoal>1</BtnSoal>
                <BtnSoal>2</BtnSoal>
                <BtnSoal>3</BtnSoal>
                <BtnSoal>4</BtnSoal>
                <BtnSoal>5</BtnSoal>
                <BtnSoal>6</BtnSoal>
                <BtnSoal>7</BtnSoal>
                <BtnSoal>8</BtnSoal>
                <BtnSoal>9</BtnSoal>
                <BtnSoal>10</BtnSoal>
                </NomorWrapper>
            </SoalContent>
            <BtnWrap>
                <BtnContent>
                <BtnGray btnMargin="5px" btnWidth="120px" btnHeight="50px">Sebelumnya</BtnGray>
                <Link href="/ujian/konfirmasi">
                    <BtnBlue btnMargin="5px" btnWidth="120px" btnHeight="50px">Selanjutnya</BtnBlue>
                </Link>
                </BtnContent>
                <TandaSoalContent>
                <input type="radio" id="markedQuestion" onClick={choiceHandler}/>
                <label><P txColor="black" txMargin="-10px 0 10px 10px">Tandai Soal</P></label>
                </TandaSoalContent>
            </BtnWrap>
            </PagePilganContent>
        </PagePilganWrapper>
    )
}

export default UjianLayout