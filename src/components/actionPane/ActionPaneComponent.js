import {
  StyledButton,
  StyledActionPaneContainer,
  StyledButtonContainer,
} from './ActionPane.styles';


const ActionPaneComponent = (props) => {
  const { onExport, onClearList } = props;

  return <StyledActionPaneContainer>
    <StyledButtonContainer>
      <StyledButton onClick={onClearList} >Clear</StyledButton>
      <StyledButton onClick={onExport} >Export</StyledButton>
    </StyledButtonContainer>
  </StyledActionPaneContainer>
}

export default ActionPaneComponent;