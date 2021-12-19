//Import Component
import { Title,P } from "../../components/typography/typo"
import { TextBox } from "../../components/textbox/textbox"
import { FormLogin, LoginSiswaWrapper,PageLSWrapper } from "./loginguru.style"
import { Label } from "../../components/textbox/label"
import { BtnBlue } from "../../components/button/button"

const LoginSiswa = () => {
    const LoginSiswaHandler = (e) =>{
        e.preventDefault()
        console.log("Test Kirim")
    };
    return(
        <PageLSWrapper>
            <LoginSiswaWrapper>
                <Title txSize='4rem'>ELXAM</Title>
                <P>masuk sebagai guru</P>
                <FormLogin type='submit' onSubmit={LoginSiswaHandler}>
                    <Label lblMargin='5px'>Username</Label>
                    <TextBox txbMargin='5px' name='username' type='text'placeholder="masukkan username"/>
                    <br/>
                    <Label lblMargin='5px'>Password </Label>
                    <TextBox txbMargin='5px' name='password' type='password'placeholder="masukkan password"/>
                    <br/>
                    <BtnBlue btnMargin='10px' btnHeight='30px' btnWidth='90px'>Login</BtnBlue>
                </FormLogin>
            </LoginSiswaWrapper>
        </PageLSWrapper>
        
    )
}

export default LoginSiswa