//Import Component
import { BtnBlue } from "../../components/button/button"
import { P, Title } from "../../components/typography/typo";
//Import Style
import { BtnDiv, ContentWrapper, HomeWrapper } from "./homescreen.style";

//Import next component
import Link from "next/link";

const HomeScreen = () =>{
    return(
        <HomeWrapper>
            <ContentWrapper>
                <Title txSize='4rem'>Tugas SIAK</Title>
                <P>masuk sebagai</P>
                <BtnDiv>
                    <Link href="/penjualan">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Penjualan</p></BtnBlue>
                    </Link>
                    <Link href="/pembelian">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Pembelian</p></BtnBlue>
                    </Link>
                    <Link href="/setup">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>SetUp</p></BtnBlue>
                    </Link>
                </BtnDiv>
            </ContentWrapper>
            
        </HomeWrapper>
    )
};

export default HomeScreen