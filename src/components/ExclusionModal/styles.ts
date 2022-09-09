import styled from "styled-components"

export const Container = styled.form`
    background-color: white;
    border: none;
    box-shadow: none;
    outline: none;
    display: flex;
    flex-direction: column;

    h3 {
        margin-bottom: 24px;
    }

    label {
        margin-bottom: 20px;
    }

    button {
        align-self: end;
    }
`