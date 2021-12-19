import { Data_Nama } from "../../DATA_DUMMY/Data_Dummy"

//Import Component
import { P, Title } from "../../components/typography/typo"
import { TextBox } from "../../components/textbox/textbox"

//Import Style
import { InfoWrapper, InfoItemLeft, InfoItemRight, PageSiswaWrapper, PageSiswaContent } from "./siswa.style"
import { BtnBlue, BtnGray } from "../../components/button/button"

//Import React Componen
import { useState, useEffect } from "react"
import Link from "next/link"
const SiswaLayout = () =>{
    // Set Timer
    const [endTime, setEndTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerUjian, setTimerUjian] = useState(false)
    const [tokenDestroy,setTokenDistroy] = useState(true) 
    const [startUjian, setStartUjian] = useState(false)
    
    useEffect(() => {
        const target = new Date("12/13/2021 12:39:00");

        const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);

        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
            setEndTime(false);
            if(tokenDestroy===false){
                setStartUjian(true)
            }
            setTimerUjian(false)
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [timerUjian]);

    
    const submitTokenHandler = (e) => {
        e.preventDefault()
        let isi = document.getElementById('token').value
        setTimerUjian(true)
        console.log(isi)
        setTokenDistroy(false)
        setEndTime(true)
    }
    return(
        <PageSiswaWrapper>
            <PageSiswaContent>
                <Title txSize='4rem'>ELXAM</Title>
                <InfoWrapper>
                    <InfoItemLeft>
                        <P>Nama</P>
                        <P>Tanggal Lahir</P>
                        <P>Sekolah</P>
                        <P>Kelas</P>
                    </InfoItemLeft>
                    <br/>
                    <InfoItemRight>
                        <P>: {Data_Nama.nama}</P>
                        <P>: {Data_Nama.ttl}</P>
                        <P>: {Data_Nama.sekolah}</P>
                        <P>: {Data_Nama.kelas}</P>
                    </InfoItemRight>
                </InfoWrapper>
                {tokenDestroy && <TextBox 
                    txbWidth='200px'
                    txbHeight='45px'
                    txbMargin='10px' 
                    type='text' 
                    id='token'
                    placeholder='Masukan Token Disini'/>}
                {endTime && <P>{days}H:{hours}J:{minutes}M:{seconds}D</P>}
                <br/>
                {tokenDestroy && <BtnBlue btnHeight='30px' btnWidth='110px' onClick={submitTokenHandler}>Cek Token</BtnBlue>}
                {endTime && <BtnGray btnHeight='30px' btnWidth='110px'>Mulai Ujian</BtnGray>}
                {endTime || startUjian && <Link href="/menu">
                    <BtnBlue btnHeight='30px' btnWidth='110px' btnMargin="20px 0 0 0">Mulai Ujian</BtnBlue>
                </Link>}
            </PageSiswaContent>
        </PageSiswaWrapper>
        
    )
}

export default SiswaLayout