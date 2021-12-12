import styled from "styled-components";
import { fonts, textColor, device } from '../../styles/mixin';

export const TitleStyle = styled.h1`
    font-family: ${fonts.ABeeZee};
    color: ${({ txWhite }) => (txWhite ? textColor.primary_white : textColor.primary_800)};
    font-size: ${({ txSize }) => (txSize ? '2.25rem' : '1.5rem')};
    font-weight: ${({ txWeight }) => (txWeight ? '700' : '600')};
    line-height: ${({ txLineHeight }) => txLineHeight || '150%'};
    text-align: ${({ txAlign }) => txAlign};
    margin: ${({ txMargin }) => txMargin};
    padding: ${({ txPadding }) => txPadding};
    background-color: ${({ txBackground }) => txBackground};
    display: ${({ txDisplay }) => txDisplay};
    transition: 0.2s ease-in;

    ${({ customize }) =>
        customize &&
        css`
        color: ${({ txColor }) => txColor};

        :hover {
            color: ${({ hvColor }) => hvColor};
        }
        `}

    ${({ txMobile }) =>
        txMobile &&
        css`
        @media ${device.mobile_md} {
            font-size: 1.25rem;
        }
        `}
`;

export const ParagrafStyle = styled.p`
    font-family: ${fonts.ABeeZee};
    color: ${({ txWhite }) => (txWhite ? textColor.primary_white : textColor.primary_400)};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: ${({ txLineHeight }) => txLineHeight || '180%'};
    text-align: ${({ txAlign }) => txAlign};
    margin: ${({ txMargin }) => txMargin};
    padding: ${({ txPadding }) => txPadding};
    background-color: ${({ txBackground }) => txBackground};
    display: ${({ txDisplay }) => txDisplay};
    transition: 0.2s ease-in;

    ${({ customize }) =>
        customize &&
        css`
        color: ${({ txColor }) => txColor};

        :hover {
            color: ${({ hvColor }) => hvColor};
        }
        `}

    ${({ txMobile }) =>
        txMobile &&
        css`
        @media ${device.mobile_md} {
            font-size: 0.875rem;
        }
        `}
`;