import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./setup.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpCustomer from "../popupsetup/popupcustomer";

import { useState, useEffect } from "react";

const SetupCustomer = (props) => {
    const [DataNilai,setDataNilai] = useState([])
    useEffect(()=>{
        setDataNilai(JSON.parse(localStorage.getItem("customer")))
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
            localStorage.setItem("customer",JSON.stringify(datain))
        }
        else{
        const temp = [...DataNilai]
        temp.push(data)
        setDataNilai(temp)
        localStorage.setItem("customer",JSON.stringify(temp))
        }
    }
    const [popUpPembayaran, setPopUpPemb] = useState(false)
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
        dataDelTemp.splice(dataDelTemp[id],1)
        localStorage.setItem("customer",JSON.stringify(dataDelTemp))
        setDataNilai(dataDelTemp)
        console.log(dataDelTemp)
    }
    return(
        <HistoryWrap>
            {popUpPembayaran && <PopUpCustomer closePopUp={closePopUp} addData={addData}/>}
            <HistoryContent>
                <Title>Customer</Title>
                <TabelJudul>
                    <KolomJudul>
                        <Title>Kode Customer</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Nama</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Alamat</Title>
                    </KolomJudul>
                    <KolomJudul>
                        <Title>Saldo</Title>
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
                        <P txColor="#242424">{val.alamat}</P>
                    </Kolom>
                    <Kolom>
                        <P txColor="#242424">{val.saldo}</P>
                    </Kolom>
                    <Kolom>
                        <BtnBlue id={val.kode} onClick={hapusHandler} btnWidth="70px">Hapus</BtnBlue>
                    </Kolom>
                    </Tabel>
                    )}
                    <TabelInput>
                        <BtnBlue btnWidth="10vw" onClick={()=>{setPopUpPemb(true)}}>Tambah Customer</BtnBlue>
                    </TabelInput>
            </HistoryContent>
        </HistoryWrap>
    )
}

export default SetupCustomer