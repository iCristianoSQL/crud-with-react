import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.form`
    width: 95%;
    border: 1px solid ${colors.primary[0.1]};
    margin-top: 44px;
    padding: 25px 10px;

    h3 {
        margin: 0 0 34px 0;
    }
`

export const InputsContent = styled.div`
    gap: 1.1rem;
    display: flex;
    flex-direction: column;

    .create-button {
        align-self: end;
        margin-right: 20px;
    }
`