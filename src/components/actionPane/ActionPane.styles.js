import styled from 'styled-components';

export const StyledActionPaneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 800px;
    height: 0px;
    border: 0.5px solid lightgrey;
    right: 0px;
    bottom: -10px;
  }
`;

export const StyledButton = styled.button`\
  margin-left: 20px;
  background-color: #27a744;
  border: 1px solid white;
  border-radius: 4px;
  width: 80px;
  height: 40px;
  color: white;
  cursor: pointer;
  &:active {
    background-color: green;
  }
`;