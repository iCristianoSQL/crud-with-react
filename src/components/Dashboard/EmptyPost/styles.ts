import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Content = styled.div`
    height: 220px;
    width: 90%;
    max-width: 800px;
    margin-top: 45px;
    border: 1px solid ${colors.primary[2.1]};
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p {
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        margin-top: 1rem;
        color: ${colors.primary[2.1]};
    }

    svg {
        fill: ${colors.primary[2.1]};
        font-size: 8rem;
    }
`