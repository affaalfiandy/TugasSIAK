import styled from "styled-components";

export const TextBoxStyle = styled.input`
width: ${({ txbWidth }) => txbWidth};
height: ${({ txbHeight }) => txbHeight};
margin: ${({ txbMargin }) => txbMargin};
font-family:'ABeeZee',sans-serif;
text-align:center;
`;