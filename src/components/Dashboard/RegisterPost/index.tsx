import React, { FormEvent, ChangeEvent, useState } from 'react'
import { Container, InputsContent } from './styles'
import { TextInput, Button } from '../../../components'
import { TextArea } from '../../TextArea';
import { colors } from '../../../utils/colors';

export const RegisterPostage = () => {
    const [inputValue, setInputValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const arr: any = []
    console.log(arr)

    const handleSubtmit = (event: FormEvent) => {
        event.preventDefault()
        const data = {
            inputValue
        }

        arr.push(data)
    }

    const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const getTextValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(event.target.value)
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
                    onChange={getInputValue}
                />
                <TextArea
                    label='Content'
                    placeholder='Content here'
                />
                <Button
                    background={colors.primary[0]}
                    color={colors.primary[1]}
                    className='create-button'
                    width='110px'
                    height='33px'
                    type='submit'
                >
                    Create
                </Button>
            </InputsContent>
        </Container >
    )
}