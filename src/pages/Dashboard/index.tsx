import { useState, useRef } from "react";

import * as S from "./styles"

import { UserPosts, Navigation, RegisterPostage, EmptyPost, EditModal } from '../../components';
import withLayout from '../../hocs/Layout/layout';

import { IoMdExit } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux"
import { IReduxState } from '../../interfaces/reduxState';

import dayjs from 'dayjs';


const Home = () => {
    const navigate = useNavigate()
    const [isEditModal, setIsEditModal] = useState(false)
    const referenceId = useRef<number>(0)

    const productList = useSelector((state: IReduxState) => state.users.value)

    const returnLogin = () => {
        navigate('/login')
    }

    const SetModal = {
        handleOpenEditModal: () => {
            setIsEditModal(true)

        },
        handleCloseEditModal: () => {
            setIsEditModal(false)
        }
    }

    function getDate(date: Date) {
        const diffDate = dayjs().diff(date, 'minutes')

        if (diffDate < 60) {
            return (diffDate + 1) + ' minutes ago'
        } else {
            const minutes = dayjs().diff(date, 'hours')
            return minutes + ' hours ago'
        }
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
                    <>
                        {productList.map((event) => {
                            return (
                                <>
                                    <UserPosts
                                        id={event.id}
                                        name={event.userName}
                                        title={event.title}
                                        content={event.content}
                                        time={getDate(event.createdAt)}
                                    >
                                        <button onClick={() => {
                                            SetModal.handleOpenEditModal();
                                            referenceId.current = event.id
                                        }}>
                                            <FaEdit />
                                        </button>
                                    </UserPosts>
                                    <EditModal
                                        id={referenceId.current}
                                        isOpen={isEditModal}
                                        onRequestClose={SetModal.handleCloseEditModal}
                                        handleCloseModal={SetModal.handleCloseEditModal}
                                    />
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