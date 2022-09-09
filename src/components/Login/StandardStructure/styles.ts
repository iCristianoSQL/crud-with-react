import styled from "styled-components";
import { motion } from "framer-motion"
import { colors } from "../../../utils/colors";

export const Container = styled(motion.section)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding-top: 0.5rem;
    gap: 5rem;
    position: relative;

    @media(min-width: 420px){
        width: 375px;
        min-height: 450px;
        height: fit-content;
    };

    display: flex;
    align-items: center;
    flex-direction: column;

    background: transparent;
    box-shadow: 
     rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px, 
     rgba(0, 0, 0, 0.12) 0px 4px 6px, 
     rgba(0, 0, 0, 0.17) 0px 12px 13px, 
     rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    .greetings {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1rem;
        }

        img {
            width: 90%;
            min-width: 280px;
            pointer-events: none;
        }

    }

    .clip-style {
        clip-path: polygon(0 75%, 51% 86%, 100% 100%, 0% 100%);
        width: 100%;
        height: 100%;
        background: ${colors.primary[0]};
        position: absolute;
        bottom: 0;

        @media (min-width: 420px) {
            height: 40%;
        }
    }
`

export const ChildrenContent = styled.div`
    width: 100%;
    height: 'fit-content';
`