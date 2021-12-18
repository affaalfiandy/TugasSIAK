import { BtnBlue, BtnSoal, BtnGray } from "../../components/button/button"
import { PagePilganWrapper, PagePilganContent, SoalWraper, PilihanWrap, SoalContent, NomorWrapper, BtnWrap, BtnContent, TandaSoalContent, EssayInput } from "./essay.style"
import { P } from "../../components/typography/typo"

import { useState } from "react"

const UjianEssayLayout = () => {
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
                    <PilihanWrap>
                        <EssayInput/>
                    </PilihanWrap>
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
                <BtnBlue btnMargin="5px" btnWidth="120px" btnHeight="50px">Selanjutnya</BtnBlue>
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

export default UjianEssayLayout