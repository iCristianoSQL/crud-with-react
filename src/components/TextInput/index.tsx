import { forwardRef } from 'react'

import * as S from "./styles"
import { IStyledTextInput } from './types'

export const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, IStyledTextInput> = ({
  height,
  width,
  placeholder,
  type,
  label,
  ...rest
}, ref) => {
  return (
    <S.Label>
      {label}
      <S.TextInput
        type={type}
        height={height}
        width={width}
        placeholder={placeholder}
        ref={ref}
        label={label}
        {...rest}
      />
    </S.Label>
  )
}

export default forwardRef(TextInput);