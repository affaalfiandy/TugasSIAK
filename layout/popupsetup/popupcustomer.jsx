import { BtnBlue, BtnGray } from "../../components/button/button"
import { Label } from "../../components/textbox/label"
import { TextBox } from "../../components/textbox/textbox"
import { BackdropPembelian, KolomInput, PopUpLayer, TabelInput } from "./popupsetup.style"

const PopUpCustomer = (props) =>{
    const submitPop = (e) =>{
        e.preventDefault()
        props.closePopUp(false)
        const kode = document.getElementById("kode").value
        const nama = document.getElementById("nama").value
        const alamat = document.getElementById("alamat").value
        const saldo = document.getElementById("saldo").value
        const data = {
            kode:kode,
            nama:nama,
            alamat:alamat,
            saldo:saldo
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
                        <Label>Kode</Label>
                        <TextBox id="kode"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Nama</Label>
                        <TextBox id="nama"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Alamat</Label>
                        <TextBox id="alamat"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Saldo</Label>
                        <TextBox id="saldo"></TextBox>
                    </KolomInput>
                    <BtnGray btnWidth="100px" btnMargin="5px" onClick={closePop}>Batal</BtnGray>
                    <BtnBlue btnWidth="100px" btnMargin="5px" onClick={submitPop}>Simpan</BtnBlue>
                </TabelInput>
            </PopUpLayer>
        </BackdropPembelian>
    )
}

export default PopUpCustomer