import styled, { css } from "styled-components";
import { colors } from "../../../utils/colors";
import { INavigationProps } from "./types";

export const Container = styled.nav<INavigationProps>`
    ${({ width }) => css` width: ${width ?? '800px'}`};
    height: 80px;
    background: ${colors.primary[0]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: ${colors.primary[1]};
        margin-left: 37px;
    }
    
    button:last-child {
        margin-right: 37px;
    }

    button {
        background: transparent;
        width: fit-content;

        svg {
            fill: ${colors.primary[1]};
            font-size: 1.5rem;
        }
    }
`

export const IconsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`