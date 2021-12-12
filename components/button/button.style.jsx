import styled from "styled-components";
import { fonts, mainColor } from "../../styles/mixin";

export const Btn = styled.button`
    font-family:${fonts.ABeeZee};
    border:none;
    border-radius:20px;
`;

export const BtnBlueStyle = styled(Btn)`
    background-color:#4B6587;
    width: ${({ btnWidth }) => btnWidth};
    height: ${({ btnHeight }) => btnHeight};
    margin: ${({ btnMargin }) => btnMargin};
    position: ${({ btnPosition }) => btnPosition};
    line-height: ${({ btnLineHeight }) => btnLineHeight || '180%'};
    font-size: ${({ btnFontSize }) => btnFontSize || '1rem'};
    visibility: ${({ btnVisibility }) => btnVisibility || 'visible'};
    color: white;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    :hover {
        background-color: ${mainColor.primary_hover};
    }
`;

export const BtnGrayStyle = styled(Btn)`
    background-color:#C8C6C6;
    width: ${({ btnWidth }) => btnWidth};
    height: ${({ btnHeight }) => btnHeight};
    margin: ${({ btnMargin }) => btnMargin};
    position: ${({ btnPosition }) => btnPosition};
    line-height: ${({ btnLineHeight }) => btnLineHeight || '180%'};
    font-size: ${({ btnFontSize }) => btnFontSize || '1rem'};
    visibility: ${({ btnVisibility }) => btnVisibility || 'visible'};
    color: black;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    :hover {
        background-color: #C8C6C6;
    }
`;