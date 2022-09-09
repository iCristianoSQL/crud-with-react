import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.form`
    width: 90%;
    border: 1px solid ${colors.primary[0.1]};
    margin-top: 44px;

    h3 {
        margin: 15px 0px 34px 10px;
    }
`

export const InputsContent = styled.div`
    gap: 1.1rem;
    display: flex;
    flex-direction: column;
    margin: 0px 10px 25px 10px;

    .create-button {
        align-self: end;
        margin-right: 20px;
    }
`