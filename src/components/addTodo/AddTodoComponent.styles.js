import styled from 'styled-components';

export const StyledAddTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledInputContainer = styled.div`
  border: 2px solid lightgreen;
  border-radius: 8px;
  height: 150px;
  width: 800px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const StyledTitleInput = styled.input`
  border: 0px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
`;

export const StyledDescriptionInput = styled.textarea`
  border: 0px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  resize: none;
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