import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.section)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    padding-top: 0.5rem;

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

        img {
            width: 90%;
            pointer-events: none;
        }

    }    
`

export const ChildrenContent = styled.div`
    width: 100%;
    height: 'fit-content';
    display: flex;
    flex-direction: column;
    align-items: center;
`