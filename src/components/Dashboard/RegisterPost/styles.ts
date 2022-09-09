import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.form`
    height: fit-content;
    min-height: 350px;
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

    @media (max-width: 640px) {
        input, textarea {
            width: 90%;
        }

        .create-button {
            align-self: center !important;
            margin-right: 0px !important;
            width: 130px;
            height: 38px;
        }
    }

    .create-button {
        align-self: end;
        margin-right: 20px;
    }
`