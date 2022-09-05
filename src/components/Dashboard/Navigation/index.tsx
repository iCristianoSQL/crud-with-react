import { Container, IconsDiv } from "./styles"
import { INavigationProps } from './types';

export const Navigation = ({ children, title }: INavigationProps) => {
    return (
        <Container>
            <b>{title}</b>
            <IconsDiv>
                {children}
            </IconsDiv>
        </Container>
    )
}