import React, { forwardRef } from 'react'
import { Text, Label } from './styled'
import { ITextAreaProps } from './types'

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, ITextAreaProps> = ({
    label,
    placeholder,
    width,
    height,
    handleChange,
    ...rest
}, ref) => {
    return (
        <Label>
            {label}
            <Text
                placeholder={placeholder}
                onChange={handleChange}
                height={height}
                width={width}
                ref={ref}
                {...rest}
            />
        </Label>
    )
}

export default forwardRef(TextArea)