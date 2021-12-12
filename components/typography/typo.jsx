import { TitleStyle, ParagrafStyle } from "./typo.style"

export const Title = (props) => <TitleStyle {...props}>{props.children}</TitleStyle>

export const P = (props) => <ParagrafStyle {...props}>{props.children}</ParagrafStyle>