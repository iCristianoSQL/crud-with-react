import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Container = styled.section`
    height: 100%;
    max-height: 100vh;
    width: 800px;
    padding-bottom: 1rem;
    background: ${colors.primary[1]};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 800px) {
        width: 100%;

        .dashboard-navigation {
            width: 100%;
    }
    }


`