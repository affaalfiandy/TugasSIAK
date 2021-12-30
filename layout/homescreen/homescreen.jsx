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
                    <Link href="/loginguru">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Admin</p></BtnBlue>
                    </Link>
                    <Link href="/loginsiswa">
                        <BtnBlue btnFontSize='1.5rem' btnWidth='200px' btnHeight='50px' btnMargin='10px'><p>Kasir</p></BtnBlue>
                    </Link>
                </BtnDiv>
            </ContentWrapper>
            
        </HomeWrapper>
    )
};

export default HomeScreen