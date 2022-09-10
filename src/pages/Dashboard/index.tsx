import * as S from "./styles"

import { UserPost, Navigation, RegisterPostage, EmptyPost } from '../../components';
import withLayout from '../../hocs/Layout/layout';

import { IoMdExit } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux"
import { IReduxState } from '../../interfaces/reduxState';

const Home = () => {
    const navigate = useNavigate()

    const productList = useSelector((state: IReduxState) => state.users.value)

    const returnLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <S.Container>
                <Navigation title='CodeLeap Network' className="dashboard-navigation">
                    <button onClick={returnLogin}>
                        <IoMdExit />
                    </button>
                </Navigation>
                <RegisterPostage />
                {productList.length >= 1 ?
                    <UserPost />
                    :
                    <EmptyPost />
                }
            </S.Container>
        </>
    )
}

export default withLayout(Home);