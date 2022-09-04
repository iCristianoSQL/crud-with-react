import React, { forwardRef } from 'react'

import * as S from "./styles"
import { IStyledTextInput } from './types'

export const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, IStyledTextInput> = ({
  height,
  width,
  placeholder,
  type,
  ...rest
}, ref) => {
  return (
    <S.TextInput
      type={type}
      height={height}
      width={width}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  )
}

export default forwardRef(TextInput);