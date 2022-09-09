import React, { useRef, useCallback, useEffect, FormEvent } from 'react'

import { Button, TextInput, StandardStructure } from '../../components'

import { LoginForm, Container } from './styles'

import { colors } from '../../utils/colors'
import { toastMessage } from '../../utils/toastMessage'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const userName = window.localStorage.getItem('@userName') ?? ''
        if (userName) {
            window.localStorage.removeItem('@userName')
            toastMessage({
                message: 'You have logged out, please enter your name',
                type: 'success'
            })
        }
    }, [])

    const handleSubmit = useCallback((event: FormEvent) => {
        event.preventDefault()
        const typedValue = inputEl.current?.value ?? ''

        if (typedValue.length >= 3 && typedValue.length <= 24) {
            toastMessage({
                message: `Welcome ${typedValue}`,
                type: 'success'
            })
            navigate('/home')
            window.localStorage.setItem('@userName', typedValue)
        } else {
            toastMessage({
                message: 'The name must have a minimum of 3 and a maximum of 24 characters',
                type: 'error'
            })
        }
    }, [])

    return (
        <Container>
            <StandardStructure>
                <LoginForm onSubmit={handleSubmit}>
                    <TextInput
                        type='text'
                        placeholder='Name'
                        autoFocus
                        spellCheck='false'
                        label='Please enter your username'
                        ref={inputEl}
                    />

                    <Button
                        width='200px'
                        background={colors.primary[0]}
                        margin={'1rem'} color={colors.primary[1]}
                        className='input-login'
                        type='submit'
                    >
                        Login
                    </Button>
                </LoginForm>
            </StandardStructure>
        </Container>
    )
}