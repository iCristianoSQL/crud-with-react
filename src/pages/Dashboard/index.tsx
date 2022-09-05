import React from 'react'
import * as S from "./styles"

import { IoMdExit } from 'react-icons/io';

import withLayout from '../../hocs/Layout/layout';
import { useNavigate } from 'react-router-dom';
import { Navigation, RegisterPostage } from '../../components';


const Home = () => {
    const navigate = useNavigate()

    const returnLogin = () => {
        navigate('/')
    }
    return (
        <S.Container>
            <Navigation title='CodeLeap Network'>
                <button onClick={returnLogin}>
                    <IoMdExit />
                </button>
            </Navigation>
            <RegisterPostage />
        </S.Container>
    )
}

export default withLayout(Home);