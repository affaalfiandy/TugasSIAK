import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./penjualan.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpPenjualan from "../PopUpPembelian/PopUpPenjualan";

import { useState, useEffect } from "react";

const Penjualan = (props) => {
    const [dataVendor,setDataVendor] = useState()
    const [dataStok, setDataStok] = useState()
    const [dataCust, setDataCust] = useState()
    useEffect(()=>{
        setDataVendor(JSON.parse(localStorage.getItem("vendor")))
        setDataStok(JSON.parse(localStorage.getItem("stok")))
        setDataCust(JSON.parse(localStorage.getItem("customer")))
    }
        ,[DataNilai]
    )
    const [DataNilai,setDataNilai] = useState([])
    useEffect(()=>{
        setDataNilai(JSON.parse(localStorage.getItem("penjualan")))
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
            let idCust = null
            for(let y in dataCust){
            if(dataCust[y].kode===data.idCust){
                idCust = y
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
                customer:dataCust[idCust].nama
            }
            const dataStokTemp = [...dataStok]
            dataStokTemp[id].qty = Number(dataStokTemp[id].qty)-Number(data.qty)
            dataStokTemp[id].total = Number(dataStokTemp[id].total)-Number((Number(data.qty)*Number(dataStok[id].harga))-(Number(data.qty)*Number(dataStok[id].harga)*(Number(data.diskon/100))))
            setDataStok(dataStokTemp)
            const dataCustTemp = [...dataCust]
            dataCustTemp[idCust].saldo = Number(dataCustTemp[idCust].saldo)-Number((Number(data.qty)*Number(dataStok[id].harga))-(Number(data.qty)*Number(dataStok[id].harga)*(Number(data.diskon/100))))
            setDataCust(dataCustTemp)
            const datain = []
            datain.push(DataTemp)
            setDataNilai(datain)
            localStorage.setItem("penjualan",JSON.stringify(datain))
        }
        else{
            let id = null
            for(let x in dataStok){
            if(dataStok[x].kode===data.kode){
                id = x
                break
            }
            }
            let idCust = null
            for(let y in dataCust){
            if(dataCust[y].kode===data.idCust){
                idCust = y
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
                customer:dataCust[idCust].nama
            }
            const dataStokTemp = [...dataStok]
            dataStokTemp[id].qty = Number(dataStokTemp[id].qty)-Number(data.qty)
            dataStokTemp[id].total = Number(dataStokTemp[id].total)-Number((Number(data.qty)*Number(dataStok[id].harga))-(Number(data.qty)*Number(dataStok[id].harga)*(Number(data.diskon/100))))
            setDataStok(dataStokTemp)
            const dataCustTemp2 = [...dataCust]
            dataCustTemp2[idCust].saldo = Number(dataCustTemp2[idCust].saldo)-Number((Number(data.qty)*Number(dataStok[id].harga))-(Number(data.qty)*Number(dataStok[id].harga)*(Number(data.diskon/100))))
            setDataCust(dataCustTemp2)
            const temp = [...DataNilai]
            temp.push(DataTemp2)
            setDataNilai(temp)
            localStorage.setItem("penjualan",JSON.stringify(temp))
        }
    }
    const [popUpPembayaran, setPopUpPemb] = useState(false)
    const selesaiBeli = () => {
        
        localStorage.setItem("stok",JSON.stringify(dataStok))
        localStorage.setItem("customer",JSON.stringify(dataCust))
        window.print()
        localStorage.removeItem("penjualan")
    }
    return(
        <HistoryWrap>
            {popUpPembayaran && <PopUpPenjualan dataStok={dataStok} closePopUp={closePopUp} addData={addData} dataCust={dataCust}/>}
            <HistoryContent>
                <Title>Pembelian</Title>
                <TabelJudul>
                    <KolomJudul>
                        <Title>Kode Barang</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Nama Barang</Title>
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
                        <Title>Customer</Title>
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
                        <P txColor="#242424">{val.customer}</P>
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

export default Penjualan