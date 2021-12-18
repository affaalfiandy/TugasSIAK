import { BtnBlueStyle, BtnGrayStyle, BtnUjianStyle, BtnSoalStyle } from "./button.style";

export const BtnBlue = (props) => <BtnBlueStyle {...props}>{props.children}</BtnBlueStyle>

export const BtnGray = (props) => <BtnGrayStyle {...props}>{props.children}</BtnGrayStyle>

export const BtnUjian = (props) => <BtnUjianStyle {...props}>{props.children}</BtnUjianStyle>

export const BtnSoal = (props) => <BtnSoalStyle {...props}>{props.children}</BtnSoalStyle>
