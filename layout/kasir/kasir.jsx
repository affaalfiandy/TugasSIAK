import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput, KolomInput } from "./kasir.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";

const Kasir = (props) => {
    const DataNilai = [
        {
            kode:"090998800",
            nama:"Jus Jeruk",
            qty:1,
            diskon:20,
            harga:10000,
            total:8000
        },
    ]
    return(
        <HistoryWrap>
            <HistoryContent>
                <Title>Kasir</Title>
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
                    {DataNilai.map((val)=>
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
                        <KolomInput>
                            <input placeholder="kode barang" type="text"/>
                        </KolomInput>
                        <KolomInput>
                            <input placeholder="jumlah" type="text"/>
                        </KolomInput>
                        <KolomInput>
                            <input placeholder="diskon" type="text"/>
                        </KolomInput>
                        <BtnBlue btnWidth="100px">Tambah</BtnBlue>
                    </TabelInput>
            </HistoryContent>
        </HistoryWrap>
    )
}

export default Kasir