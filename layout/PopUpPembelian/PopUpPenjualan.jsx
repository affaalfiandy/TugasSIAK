import { BtnBlue, BtnGray } from "../../components/button/button"
import { Label } from "../../components/textbox/label"
import { TextBox } from "../../components/textbox/textbox"
import { BackdropPembelian, KolomInput, PopUpLayer, TabelInput } from "./PopUpPembelian.style"
import { P } from "../../components/typography/typo"


const PopUpPenjualan = (props) =>{
    const dataStok = props.dataStok
    const dataCust = props.dataCust
    const submitPop = (e) =>{
        e.preventDefault()
        props.closePopUp(false)
        const jumlah = document.getElementById("jumlah").value
        const diskon = document.getElementById("diskon").value
        const kode = document.getElementById("vendor-select").value
        const idCust = document.getElementById("cust-select").value
        const data = {
            kode:kode,
            qty:jumlah,
            diskon:diskon,
            idCust:idCust
        }
        props.addData(data)
    }
    const closePop = (e) =>{
        e.preventDefault()
        props.closePopUp(false)
    }
    return(
        <BackdropPembelian>
            <PopUpLayer>
                <TabelInput>
                    <KolomInput>
                    <Label for="pet-select">Pilih id</Label>
                    <select name="pets" id="vendor-select">
                        <option value="">Pilih id</option>
                    {dataStok==null ? <P txMargin="10px">Data Kosong</P> : dataStok.map((val)=>
                        <option value={val.kode}>{val.kode}</option>
                    )}
                        
                    </select>
                    </KolomInput>
                    <KolomInput>
                    <Label for="pet-select">Pilih Customer</Label>
                    <select name="pets" id="cust-select">
                        <option value="">Pilih Customer</option>
                    {dataCust==null ? <P txMargin="10px">Data Kosong</P> : dataCust.map((val)=>
                        <option value={val.kode}>{val.kode}</option>
                    )}
                        
                    </select>
                    </KolomInput>
                    <KolomInput>
                        <Label>Jumlah</Label>
                        <TextBox id="jumlah"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Diskon</Label>
                        <TextBox id="diskon"></TextBox>
                    </KolomInput>
                    <BtnGray btnWidth="100px" btnMargin="5px" onClick={closePop}>Batal</BtnGray>
                    <BtnBlue btnWidth="100px" btnMargin="5px" onClick={submitPop}>Simpan</BtnBlue>
                </TabelInput>
            </PopUpLayer>
        </BackdropPembelian>
    )
}

export default PopUpPenjualan