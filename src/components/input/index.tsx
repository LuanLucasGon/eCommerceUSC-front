import React, { InputHTMLAttributes, useState, forwardRef } from 'react';
import { Container, InputStyle, Icon } from './styles';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, ...props }, ref) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <Container>
      <InputStyle
        ref={ref}
        type={type === "password" && isPasswordVisible ? "text" : type}
        {...props}
      />
      {type === "password" && (
        <Icon onClick={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <EyeSlashIcon style={{ width: "24px", height: "24px" }} />
          ) : (
            <EyeIcon style={{ width: "24px", height: "24px" }} />
          )}
        </Icon>
      )}
    </Container>
  );
});

// Adicione o display name para depuração, especialmente útil ao usar HOCs.
Input.displayName = 'Input';

export default Input;