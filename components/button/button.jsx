import { BtnBlueStyle, BtnGrayStyle } from "./button.style";

export const BtnBlue = (props) => <BtnBlueStyle {...props}>{props.children}</BtnBlueStyle>

export const BtnGray = (props) => <BtnGrayStyle {...props}>{props.children}</BtnGrayStyle>
