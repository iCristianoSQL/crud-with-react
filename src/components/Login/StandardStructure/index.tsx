import withLayout from '../../../hocs/Layout/layout'

import * as S from './styles'

import logo from "../../../assets/svg/logo.svg"

import { LoginLayoutProps } from './types'

const StandardStructure = ({ children, handleSubmit }: LoginLayoutProps) => {
    return (
        <S.Container>
            <div className='greetings'>
                <img src={logo} alt="Logo" />
                <span>Welcome to CodeLeap network!</span>
            </div>
            <S.ChildrenContent onSubmit={handleSubmit}>
                {children}
            </S.ChildrenContent>
            <span className='clip-style' />
        </S.Container>
    )
}

export default withLayout(StandardStructure)