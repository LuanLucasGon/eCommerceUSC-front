import React, {InputHTMLAttributes, useState} from 'react'
import { Container, InputStyle, Icon } from './styles';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type inputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({type, ...props}:inputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <Container>
      <InputStyle type={type === "password" && isPasswordVisible ? "text" : type} {...props}/>
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
  )
}

export default Input
