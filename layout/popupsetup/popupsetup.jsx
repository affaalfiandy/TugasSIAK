import { BtnBlue, BtnGray } from "../../components/button/button"
import { Label } from "../../components/textbox/label"
import { TextBox } from "../../components/textbox/textbox"
import { BackdropPembelian, KolomInput, PopUpLayer, TabelInput } from "./popupsetup.style"

const PopUpSetup = (props) =>{
    const submitPop = (e) =>{
        e.preventDefault()
        props.closePopUp(false)
        const kode = document.getElementById("kode").value
        const nama = document.getElementById("nama").value
        const alamat = document.getElementById("alamat").value
        const data = {
            kode:kode,
            nama:nama,
            alamat:alamat
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
                        <Label>Kode Vendor</Label>
                        <TextBox id="kode"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Nama Vendor</Label>
                        <TextBox id="nama"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Alamat Vendor</Label>
                        <TextBox id="alamat"></TextBox>
                    </KolomInput>
                    <BtnGray btnWidth="100px" btnMargin="5px" onClick={closePop}>Batal</BtnGray>
                    <BtnBlue btnWidth="100px" btnMargin="5px" onClick={submitPop}>Simpan</BtnBlue>
                </TabelInput>
            </PopUpLayer>
        </BackdropPembelian>
    )
}

export default PopUpSetup