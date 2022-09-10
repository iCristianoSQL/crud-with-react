import { useState, useRef } from "react"

import { Navigation } from '../Navigation'

import { Content } from './styles'

import { RiDeleteBin7Fill } from 'react-icons/ri'
import { FaEdit } from "react-icons/fa"

import { useSelector } from "react-redux"
import { IReduxState } from "../../../interfaces/reduxState"

import { ExclusionModal } from "../../ExclusionModal"
import { EditModal } from "../../EditModal"
import { ISetModalProps } from "./types"

import dayjs from "dayjs"

export const UserPost = () => {
    const userName = window.localStorage.getItem('@userName')

    const productList = useSelector((state: IReduxState) => state.users.value)
    const referenceId = useRef<number>(0)

    const [isExcluseModal, setIsExcluseModal] = useState(false)
    const [isEditModal, setIsEditModal] = useState(false)

    const setModal: ISetModalProps = {
        setModalEdit: {
            handleOpenEditModal: () => {
                setIsEditModal(true)

            },
            handleCloseEditModal: () => {
                setIsEditModal(false)
            }
        },
        setModalExcluse: {
            handleOpenExcluseModal: () => {
                setIsExcluseModal(true)

            },
            handleCloseExcluseModal: () => {
                setIsExcluseModal(false)
            }
        }
    }


    function getDate(date: Date) {
        const diffDate = dayjs().diff(date, 'minutes')

        if (diffDate < 60) {
            return (diffDate + 1) + ` minute${diffDate === 0 ? '' : 's'} ago`
        } else {
            const minutes = dayjs().diff(date, 'hours')
            return minutes + ` hour${diffDate <= 600 ? '' : 's'} ago`
        }
    }

    return (
        <>
            {productList.map((event) => {
                return (
                    <Content>
                        <Navigation title={event.title} width='100%'>
                            {userName === event.userName &&
                                <>
                                    <button className='delete-task' onClick={() => {
                                        setModal.setModalExcluse.handleOpenExcluseModal();
                                        referenceId.current = event.id;
                                    }}>
                                        <RiDeleteBin7Fill />
                                    </button>
                                    <button onClick={() => {
                                        setModal.setModalEdit.handleOpenEditModal();
                                        referenceId.current = event.id;
                                    }}>
                                        <FaEdit />
                                    </button>
                                </>
                            }
                        </Navigation>
                        <div className='user-infos'>
                            <span>@{event.userName}</span>
                            <span>{getDate(event.createdAt)}</span>
                        </div>
                        <p className='content'>{event.content}</p>
                    </Content>
                )
            }).reverse()}
            <ExclusionModal
                id={referenceId.current}
                isOpen={isExcluseModal}
                handleCloseModal={setModal.setModalExcluse.handleCloseExcluseModal}
                onRequestClose={setModal.setModalExcluse.handleCloseExcluseModal}
            />
            <EditModal
                id={referenceId.current}
                isOpen={isEditModal}
                onRequestClose={setModal.setModalEdit.handleCloseEditModal}
                handleCloseModal={setModal.setModalEdit.handleCloseEditModal}
            />
        </>
    )
}
