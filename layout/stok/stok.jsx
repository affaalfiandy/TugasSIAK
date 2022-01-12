import { HistoryContent, HistoryWrap, Tabel, Kolom, TabelJudul, KolomJudul, TabelInput } from "./stok.style";
import { P, Title, A } from "../../components/typography/typo";
import { BtnBlue } from "../../components/button/button";
import PopUpPembelian from "../PopUpPembelian/PopUpPembelian";

import { useState, useEffect } from "react";

const Stok = (props) => {
    const DataNilai = JSON.parse(localStorage.getItem("stok"))
    return(
        <HistoryWrap>
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
            </HistoryContent>
        </HistoryWrap>
    )
}

export default Stok