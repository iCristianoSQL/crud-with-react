import { Container, IconsDiv } from "./styles"
import { INavigationProps } from './types';

export const Navigation = ({ children, title, width }: INavigationProps) => {
    return (
        <Container width={width} title={title}>
            <b>{title}</b>
            <IconsDiv>
                {children}
            </IconsDiv>
        </Container>
    )
}