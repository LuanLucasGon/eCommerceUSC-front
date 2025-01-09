import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Container, ButtonStyle } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <Container>
      <ButtonStyle ref={ref} {...props}>
        {children}
      </ButtonStyle>
    </Container>
  );
});

// Adicione o display name para depuração.
Button.displayName = 'Button';

export default Button;
