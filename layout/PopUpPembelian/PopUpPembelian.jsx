import { BtnBlue, BtnGray } from "../../components/button/button"
import { Label } from "../../components/textbox/label"
import { TextBox } from "../../components/textbox/textbox"
import { BackdropPembelian, KolomInput, PopUpLayer, TabelInput } from "./PopUpPembelian.style"

const PopUpPembelian = (props) =>{
    const submitPop = (e) =>{
        e.preventDefault()
        props.closePopUp(false)
        const kode = document.getElementById("kode").value
        const nama = document.getElementById("nama").value
        const harga = document.getElementById("harga").value
        const jumlah = document.getElementById("jumlah").value
        const diskon = document.getElementById("diskon").value
        const total = (harga*jumlah) - ((diskon/100)*(harga*jumlah))
        const data = {
            kode:kode,
            nama:nama,
            qty:jumlah,
            diskon:diskon,
            harga:harga,
            total:total
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
                        <Label>Kode Barang</Label>
                        <TextBox id="kode"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Nama</Label>
                        <TextBox id="nama"></TextBox>
                    </KolomInput>
                    <KolomInput>
                        <Label>Harga</Label>
                        <TextBox id="harga"></TextBox>
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

export default PopUpPembelian