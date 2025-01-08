import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center ;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  height: 24px;
`;

export const InputStyle = styled.input`
  width:100%;
  font-size: 14px;
  font-family: "Poppins", serif;
  border-radius: 5px;
  padding: 10px;
  border: 0.5px solid  #1E1E1E;

  &:hover {
    border-color: #E61E17;
  }

  &:focus {
    outline: none;
    border-color: #E61E17;
  }

`;