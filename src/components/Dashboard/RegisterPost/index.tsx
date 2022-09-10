import { FormEvent, ChangeEvent, useState } from 'react'

import { Container, InputsContent } from './styles'

import { TextInput, Button } from '../../../components'
import { TextArea } from "../../index"

import { colors } from '../../../utils/colors';

import { IPosts } from './types';
import { toastMessage } from '../../../utils/toastMessage';

import { useSelector, useDispatch } from "react-redux"
import { addUser } from '../../../features/Users';
import { IReduxState } from '../../../interfaces/reduxState';

export const RegisterPostage = () => {
    const [inputValue, setInputValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const productList = useSelector((state: IReduxState) => state.users.value)
    const dispatch = useDispatch()

    const userName = window.localStorage.getItem('@userName') ?? ''

    const CardsValue = {
        getInputValue: (event: ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value)
        },

        getTextValue: (event: ChangeEvent<HTMLTextAreaElement>) => {
            setTextValue(event.target.value)
        }
    }

    const handleSubtmit = (event: FormEvent) => {
        event.preventDefault()
        const data: IPosts = {
            id: productList.length + 1,
            userName: userName,
            title: inputValue,
            content: textValue,
            createdAt: new Date(),
        }

        dispatch(addUser(data))

        toastMessage({
            message: `Success`,
            type: 'success',
        })
    }

    return (
        <Container onSubmit={handleSubtmit}>
            <h3>What’s on your mind?</h3>
            <InputsContent>
                <TextInput
                    type='text'
                    placeholder='Hello world'
                    width='95%'
                    autoFocus
                    spellCheck='false'
                    label='Title'
                    value={inputValue}
                    onChange={CardsValue.getInputValue}
                />
                <TextArea
                    label='Content'
                    value={textValue}
                    placeholder='Content here'
                    handleChange={CardsValue.getTextValue}
                />
                <Button
                    background={colors.primary[0]}
                    color={colors.primary[1]}
                    className='create-button'
                    width='110px'
                    height='33px'
                    type='submit'
                    disabled={!inputValue || !textValue}
                >
                    Create
                </Button>
            </InputsContent>
        </Container >
    )
}