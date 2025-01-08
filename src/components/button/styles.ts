import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center ;
`;

export const ButtonStyle = styled.button`
  width:100%;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #E61E17;
  border-radius: 5px;
  padding: 10px;
  border: 0.5px solid  #E61E17;

  &:hover {
    background-color: #fff;
    color: #E61E17;
  }

`;
