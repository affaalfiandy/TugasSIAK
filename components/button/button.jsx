import { BtnBlueStyle, BtnGrayStyle, BtnUjianStyle } from "./button.style";

export const BtnBlue = (props) => <BtnBlueStyle {...props}>{props.children}</BtnBlueStyle>

export const BtnGray = (props) => <BtnGrayStyle {...props}>{props.children}</BtnGrayStyle>

export const BtnUjian = (props) => <BtnUjianStyle {...props}>{props.children}</BtnUjianStyle>
