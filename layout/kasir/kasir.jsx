import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./kasir.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpPembelian from "../PopUpPembelian/PopUpPembelian";

import { useState, useEffect } from "react";

const Kasir = (props) => {
    const [dataVendor,setDataVendor] = useState()
    const [dataStok, setDataStok] = useState()
    useEffect(()=>{
        setDataVendor(JSON.parse(localStorage.getItem("vendor")))
        setDataStok(JSON.parse(localStorage.getItem("stok")))
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
            let id = null
            for(let x in dataStok){
            if(dataStok[x].kode===data.kode){
                id = x
                break
            }
            }
            const DataTemp = {
                kode:data.kode,
                nama:dataStok[id].nama,
                harga:dataStok[id].harga,
                qty:data.qty,
                diskon:data.diskon,
                total:(data.qty*dataStok[id].harga)-(data.qty*dataStok[id].harga*(data.diskon/100)),
                vendor:dataStok[id].vendor
            }
            const dataStokTemp = [...dataStok]
            dataStokTemp[id].qty = Number(dataStokTemp[id].qty)+Number(data.qty)
            dataStokTemp[id].total = Number(dataStokTemp[id].total)+Number(data.qty*dataStok[id].harga)-(data.qty*dataStok[id].harga*(data.diskon/100))
            setDataStok(dataStokTemp)
            const datain = []
            datain.push(DataTemp)
            setDataNilai(datain)
            localStorage.setItem("pembelian",JSON.stringify(datain))
        }
        else{
            let id = null
            for(let x in dataStok){
            if(dataStok[x].kode===data.kode){
                id = x
                break
            }
            }
            const DataTemp2 = {
                kode:data.kode,
                nama:dataStok[id].nama,
                harga:dataStok[id].harga,
                qty:data.qty,
                diskon:data.diskon,
                total:(data.qty*dataStok[id].harga)-(data.qty*dataStok[id].harga*(data.diskon/100)),
                vendor:dataStok[id].vendor
            }
            const dataStokTemp = [...dataStok]
            dataStokTemp[id].qty = Number(dataStokTemp[id].qty)+Number(data.qty)
            dataStokTemp[id].total = Number(dataStokTemp[id].total)+Number(data.qty*dataStok[id].harga)-(data.qty*dataStok[id].harga*(data.diskon/100))
            setDataStok(dataStokTemp)
            const temp = [...DataNilai]
            temp.push(DataTemp2)
            setDataNilai(temp)
            localStorage.setItem("pembelian",JSON.stringify(temp))
        }
    }
    const [popUpPembayaran, setPopUpPemb] = useState(false)
    const selesaiBeli = () => {
        
        localStorage.setItem("stok",JSON.stringify(dataStok))
        window.print()
        localStorage.removeItem("pembelian")
    }
    return(
        <HistoryWrap>
            {popUpPembayaran && <PopUpPembelian dataVendor={dataVendor} dataStok={dataStok} closePopUp={closePopUp} addData={addData}/>}
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
                    <KolomJudul>
                        <Title>Vendor/Suplier</Title>
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
                    </Tabel>
                    )}
                    <TabelInput>
                        <BtnBlue btnWidth="10vw" onClick={()=>{setPopUpPemb(true);console.log(dataVendor)}}>Tambah Barang</BtnBlue>
                        <BtnBlue btnWidth="10vw" onClick={selesaiBeli}>Selesai Beli</BtnBlue>
                    </TabelInput>
            </HistoryContent>
        </HistoryWrap>
    )
}

export default Kasir