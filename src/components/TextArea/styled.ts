import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.1rem;
    color: ${colors.primary[0]};
`

export const Text = styled.textarea`
    padding: 0px 8px;
    width: 95%;
    height: 75px;

    background: transparent;
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid ${colors.primary[0.1]};
    resize: none;

    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1rem;
    color: ${colors.primary[0]};

    &::placeholder {
        font-weight: 500;
        opacity: 0.6;
    }

    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${colors.primary[0]};
        border-radius: 5px;
        border: 1px solid ${colors.primary[0]};
    }
`