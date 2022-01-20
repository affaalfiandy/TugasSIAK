import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./stok.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpStok from "../PopUpStop/PopUpStok";

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
        setDataNilai(JSON.parse(localStorage.getItem("stok")))
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
            localStorage.setItem("stok",JSON.stringify(datain))
        }
        else{
        const temp = [...DataNilai]
        temp.push(data)
        setDataNilai(temp)
        localStorage.setItem("stok",JSON.stringify(temp))
        }
    }
    const hapusHandler = (e) =>{
        e.preventDefault()
        const dataDelTemp = [...DataNilai]
        let id = null
        for(let x in dataDelTemp){
            if(dataDelTemp[x].kode==e.target.id){
                id = x
                break
            }
        }
        dataDelTemp.splice(dataDelTemp[id+1],1)
        localStorage.setItem("stok",JSON.stringify(dataDelTemp))
        setDataNilai(dataDelTemp)
        console.log(dataDelTemp)
    }
    const [popUpPembayaran, setPopUpPemb] = useState(false)
    return(
        <HistoryWrap>
            {popUpPembayaran && <PopUpStok dataVendor={dataVendor} closePopUp={closePopUp} addData={addData}/>}
            <HistoryContent>
                <Title>Stok</Title>
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
                    <KolomJudul>
                        <Title>Vendor/Suplier</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Hapus</Title>
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
                    <Kolom>
                        <P txColor="#242424">{val.vendor}</P>
                    </Kolom>
                    <Kolom>
                        <BtnBlue id={val.kode} onClick={hapusHandler} btnWidth="70px">Hapus</BtnBlue>
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