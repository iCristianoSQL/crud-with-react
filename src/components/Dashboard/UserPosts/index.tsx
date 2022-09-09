import { useState } from "react"

import { Navigation } from '../..'

import { Content } from './styles'
import { IEmptyPost } from './types'

import { RiDeleteBin7Fill } from 'react-icons/ri'
import { ExclusionModal } from "../../index"

export const UserPosts = ({
    title,
    children,
    name,
    id,
    content,
    time,
}: IEmptyPost) => {
    const userName = window.localStorage.getItem('@userName')
    const isEditable = userName === name;
    const [osExcluseModal, setIsExcluseModal] = useState(false)

    const SetModal = {
        handleOpenExcluseModal: () => {
            setIsExcluseModal(true)

        },
        handleCloseExcluseModal: () => {
            setIsExcluseModal(false)
        }
    }

    return (
        <>
            <Content>
                <Navigation title={title} width='100%'>
                    {isEditable &&
                        <>
                            <button className='delete-task' onClick={SetModal.handleOpenExcluseModal}>
                                <RiDeleteBin7Fill />
                            </button>
                            {children}
                        </>
                    }

                </Navigation>
                <div className='user-infos'>
                    <span>@{name}</span>
                    <span>{time}</span>
                </div>
                <p className='content'>{content}</p>
            </Content>
            <ExclusionModal
                id={id}
                isOpen={osExcluseModal}
                handleCloseModal={SetModal.handleCloseExcluseModal}
                onRequestClose={SetModal.handleCloseExcluseModal}
            />
        </>
    )
}
