import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./kasir.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpPembelian from "../PopUpPembelian/PopUpPembelian";

import { useState, useEffect } from "react";

const Kasir = (props) => {
    const [dataVendor,setDataVendor] = useState()
    useEffect(()=>{
        setDataVendor(JSON.parse(localStorage.getItem("vendor")))
    }
        ,[DataNilai]
    )
    const [DataNilai,setDataNilai] = useState([])
    useEffect(()=>{
        setDataNilai(JSON.parse(localStorage.getItem("pembelian")))
    }
        ,[DataNilai]
    )

    const closePopUp = (val) =>{
        setPopUpPemb(val)
    }
    const addData = (data) => {
        if(DataNilai==null){
            const datain = []
            datain.push(data)
            setDataNilai(datain)
            localStorage.setItem("pembelian",JSON.stringify(datain))
        }
        else{
        const temp = [...DataNilai]
        temp.push(data)
        setDataNilai(temp)
        localStorage.setItem("pembelian",JSON.stringify(temp))
        }
    }
    const [popUpPembayaran, setPopUpPemb] = useState(false)
    return(
        <HistoryWrap>
            {popUpPembayaran && <PopUpPembelian dataVendor={dataVendor} closePopUp={closePopUp} addData={addData}/>}
            <HistoryContent>
                <Title>Pembelian</Title>
                <TabelJudul>
                    <KolomJudul>
                        <Title>Kode Barang</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Nama</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Harga</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Jumlah</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Diskon</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Total Harga</Title>
                    </KolomJudul>
                </TabelJudul>
                    {DataNilai==null ? <P txMargin="10px">Data Kosong</P> : DataNilai.map((val)=>
                    <Tabel>
                    <Kolom>
                        <P txColor="#242424">{val.kode}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.nama}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.harga}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.qty}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.diskon}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.total}</P>
                    </Kolom>
                    </Tabel>
                    )}
                    <TabelInput>
                        <BtnBlue btnWidth="10vw" onClick={()=>{setPopUpPemb(true);console.log(dataVendor)}}>Tambah Barang</BtnBlue>
                    </TabelInput>
            </HistoryContent>
        </HistoryWrap>
    )
}

export default Kasir