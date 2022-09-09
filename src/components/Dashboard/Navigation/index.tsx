import { Container, IconsDiv } from "./styles"
import { INavigationProps } from './types';

export const Navigation = ({ children, title, width, className }: INavigationProps) => {
    return (
        <Container width={width} title={title} className={className}>
            <b>{title}</b>
            <IconsDiv>
                {children}
            </IconsDiv>
        </Container>
    )
}