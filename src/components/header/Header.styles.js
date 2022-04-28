import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  min-height: 60px;
  background-color: #282c34;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 4px 10px black;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex: 2
  align-items: flex-end;
`;

export const StyledSelect = styled.select`
  margin-left: 20px;
  width: 100px;
  height: 35px;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 4px;
`;