import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.section`
    height: 100%;
    min-height: 768px;
    max-width: 1400px;
    padding-bottom: 1rem;
    background: ${colors.primary[1]};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`