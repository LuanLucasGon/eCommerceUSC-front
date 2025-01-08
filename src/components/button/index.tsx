import React, { ButtonHTMLAttributes } from 'react'
import { Container, ButtonStyle } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({children, ...props}: Props) {
  return (
    <Container>
      <ButtonStyle {...props}>{children}</ButtonStyle>
    </Container>
  )
}

export default Button
