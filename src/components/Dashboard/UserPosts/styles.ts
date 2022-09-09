import styled from "styled-components";
import { colors } from "../../../utils/colors";

import { motion } from "framer-motion";

export const Content = styled.div`
    height: fit-content;
    max-height: 450px;
    min-height: 200px;
    overflow: auto;
    width: 90%;
    max-width: 800px;
    margin-top: 45px;
    border: 1px solid ${colors.primary[0.1]};

    .delete-task {
           svg:hover {
                fill: red !important;
                transition: 0.5s;
           } 
    }

    .user-infos {
        margin-top: 23px;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;

        color: ${colors.primary[2]};
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }

    .content {
        margin-top: 7px;
        padding: 10px 30px;

        color: ${colors.primary[0]};
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`