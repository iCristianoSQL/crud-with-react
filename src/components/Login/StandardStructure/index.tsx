import withLayout from '../../../hocs/Layout/layout'

import * as S from './styles'

import logo from "../../../assets/img/logo.svg"

import { LoginLayoutProps } from './types'

const StandardStructure = ({ children }: LoginLayoutProps) => {
    return (
        <S.Container>
            <div className='greetings'>
                <img src={logo} alt="Logo" />
                <span>Welcome back</span>
            </div>
            <S.ChildrenContent>
                {children}
            </S.ChildrenContent>
        </S.Container>
    )
}

export default withLayout(StandardStructure)