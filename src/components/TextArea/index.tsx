import React from 'react'
import { Text, Label } from './styled'
import { ITextAreaProps } from './types'

export const TextArea = ({ label, placeholder }: ITextAreaProps) => {
    return (
        <Label>
            {label}
            <Text placeholder={placeholder} ></Text>
        </Label>
    )
}