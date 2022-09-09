import React from 'react'
import { Navigation } from '../..'

import { Content } from './styles'
import { IEmptyPost } from './types'

import { useDispatch } from "react-redux"
import { deleteUser } from '../../../features/Users'

import { RiDeleteBin7Fill } from 'react-icons/ri'
import { toastMessage } from '../../../utils/toastMessage'

export const UserPosts = ({ title, children, name, id, content, time }: IEmptyPost) => {
    const userName = window.localStorage.getItem('@userName')
    const isEditable = userName === name;

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(deleteUser({ id: id }))

        toastMessage({
            message: 'Task removed',
            type: 'error'
        })
    }

    return (
        <Content>
            <Navigation title={title} width='100%'>
                {isEditable &&
                    <>
                        <button onClick={handleRemove}>
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
    )
}
