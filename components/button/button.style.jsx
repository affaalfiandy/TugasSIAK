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
        background-color: ${mainColor.primary_blue_hover};
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
    display: ${({ btnDisplay }) => btnDisplay || 'inline'};
    color: black;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    :hover {
        background-color: #C8C6C6;
    }
`;

export const BtnUjianStyle = styled(Btn)`
    background-color:#C8C6C6;
    width: ${({ btnWidth }) => btnWidth};
    height: ${({ btnHeight }) => btnHeight};
    margin: ${({ btnMargin }) => btnMargin};
    position: ${({ btnPosition }) => btnPosition};
    line-height: ${({ btnLineHeight }) => btnLineHeight || '180%'};
    font-size: ${({ btnFontSize }) => btnFontSize || '1rem'};
    display: ${({ btnDisplay }) => btnDisplay || 'inline'};
    color: black;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    :hover {
        background-color: #4B6587;
        color:white;
    }
`;

export const BtnSoalStyle = styled(Btn)`
    background-color: ${({ btnColor }) => btnColor || '#C8C6C6'};
    margin:2px;
    width: 50px;
    height: 50px;
    border-radius:10px;
    :hover {
        background-color: #4B6587;
        color:white;
    }
`;

export const BtnWhiteStyle = styled(Btn)`
    background-color:white;
    width: ${({ btnWidth }) => btnWidth};
    height: ${({ btnHeight }) => btnHeight};
    margin: ${({ btnMargin }) => btnMargin};
    position: ${({ btnPosition }) => btnPosition};
    line-height: ${({ btnLineHeight }) => btnLineHeight || '180%'};
    font-size: ${({ btnFontSize }) => btnFontSize || '1rem'};
    display: ${({ btnDisplay }) => btnDisplay || 'inline'};
    color: black;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    :hover {
        background-color: #4B6587;
        color:white;
    }
`;