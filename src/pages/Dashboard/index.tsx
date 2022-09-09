import { useState, useRef } from "react";

import * as S from "./styles"

import { UserPosts, Navigation, RegisterPostage, EmptyPost, ExclusionModal, Button } from '../../components';
import withLayout from '../../hocs/Layout/layout';

import { IoMdExit } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux"
import { IReduxState } from '../../interfaces/reduxState';

import dayjs from 'dayjs';


const Home = () => {
    const navigate = useNavigate()
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    const referenceId = useRef<number>(0)

    const productList = useSelector((state: IReduxState) => state.users.value)

    const returnLogin = () => {
        navigate('/login')
    }

    const handleOpenExclusionModal = () => {
        setIsNewTransactionModalOpen(true)
    }

    const handleCloseExclusionModal = () => {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <>
            <S.Container>
                <Navigation title='CodeLeap Network'>
                    <button onClick={returnLogin}>
                        <IoMdExit />
                    </button>
                </Navigation>
                <RegisterPostage />
                {productList.length >= 1 ?
                    <>
                        {productList.map((event) => {
                            return (
                                <>
                                    <UserPosts
                                        id={event.id}
                                        name={event.userName}
                                        title={event.title}
                                        content={event.content}
                                        time={dayjs(event.createdAt).format('mm')}
                                    >
                                        <button onClick={() => {
                                            handleOpenExclusionModal();
                                            referenceId.current = event.id
                                        }}> {/* da pra melhorar */}
                                            <FaEdit />
                                        </button>
                                    </UserPosts>
                                    <ExclusionModal id={referenceId.current} isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseExclusionModal} handleCloseModal={handleCloseExclusionModal} />
                                </>
                            )
                        }).reverse()}
                    </>
                    :
                    <EmptyPost />
                }
            </S.Container>
        </>
    )
}

export default withLayout(Home);