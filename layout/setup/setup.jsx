//Import Component
import { BtnBlue } from "../../components/button/button"
import { P, Title } from "../../components/typography/typo";
//Import Style
import { BtnDiv, ContentWrapper, HomeWrapper } from "./setupindex.style";

//Import next component
import Link from "next/link";

const SetupIndex = () =>{
    return(
        <HomeWrapper>
            <ContentWrapper>
                <Title txSize='4rem'>Tugas SIAK</Title>
                <P>masuk sebagai</P>
                <BtnDiv>
                    <Link href="/setup/setupcust">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Costumer</p></BtnBlue>
                    </Link>
                    <Link href="/setup/setupsuplier">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Supplier</p></BtnBlue>
                    </Link>
                    <Link href="/setup/setupbarang">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Barang</p></BtnBlue>
                    </Link>
                </BtnDiv>
            </ContentWrapper>
            
        </HomeWrapper>
    )
};

export default SetupIndex