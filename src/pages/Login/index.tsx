import React, { useRef, useCallback } from 'react'
import StandardStructure from '../../components/Login/StandardStructure'
import { Button, TextInput } from '../../components'
import { colors } from '../../utils/colors'
import { toastMessage } from '../../utils/toastMessage'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    const handleSubmit = useCallback(() => {
        const typedValue = inputEl.current?.value ?? ''

        if (typedValue.length >= 3) {
            toastMessage({
                message: 'Very good',
                type: 'success'
            })
            navigate('/Home')
        } else {
            toastMessage({
                message: 'The name must be at least three characters long',
                type: 'error'
            })
        }
    }, [])

    return (
        <StandardStructure>
            <TextInput
                type='text'
                placeholder='Name'
                autoFocus
                ref={inputEl}
            />

            <Button
                width='200px'
                background={colors.primary[0]}
                margin={'1rem'} color={colors.primary[1]}
                className='input-login'
                handleClick={handleSubmit}
            >
                Login
            </Button>
        </StandardStructure>
    )
}