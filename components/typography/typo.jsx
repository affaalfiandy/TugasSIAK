import { TitleStyle, ParagrafStyle, LinkTextStyle } from "./typo.style"

export const Title = (props) => <TitleStyle {...props}>{props.children}</TitleStyle>

export const P = (props) => <ParagrafStyle {...props}>{props.children}</ParagrafStyle>

export const A = (props) => <LinkTextStyle {...props}>{props.children}</LinkTextStyle>