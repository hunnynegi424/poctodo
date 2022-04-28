import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  max-height: 530px;
  overflow: auto;
`;

export const StyledListItem = styled.div`
  width: 800px;
  min-height: 150px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: lightgreen;
  margin: 10px;
  position: relative
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const StyledButton = styled.button`
  background-color: grey;
  border: 1px solid grey;
  &:focus {
    transform: scale(1.1);
    border: 2px solid lightblue;
    transition: transform 350ms;
  }
  height: 30px;
  border-radius: 4px;
  outline: none;
  margin-left: 20px;
  cursor: pointer;
  font-size: 16px;
  color: white;
`;


export const StyledTitle = styled.div`
  border: 0px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
`;
export const StyledDescription = styled.div`
  border: 0px;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;