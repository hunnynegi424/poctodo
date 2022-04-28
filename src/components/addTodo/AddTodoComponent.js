import { useRef } from 'react';
import {
  StyledAddTodoContainer,
  StyledTitleInput,
  StyledDescriptionInput,
  StyledInputContainer,
  StyledButtonContainer,
  StyledButton,
} from './AddTodoComponent.styles';


const AddTodoComponent = (props) => {
  const {
    newTodo,
    onCancel,
    onInputChange,
    onAddTodo,
  } = props;

  const titleInputRef = useRef();

  const onSubmit = () => {
    onAddTodo();
    titleInputRef.current.focus();
  }
  
  return <StyledAddTodoContainer>
    <StyledInputContainer>
      <StyledTitleInput
        ref={titleInputRef}
        placeholder='Title'
        value={newTodo.title}
        onChange={({ target }) => onInputChange('title', target.value)}
      />
      <StyledDescriptionInput
        placeholder='Description...'
        rows={5}
        value={newTodo.description}
        onChange={({ target }) => onInputChange('description', target.value)}
      />
      <StyledButtonContainer>
        <StyledButton onClick={onSubmit} >{onCancel ? 'Save' : 'Add'}</StyledButton>
        {onCancel && <StyledButton onClick={onCancel} >Cancel</StyledButton>}
      </StyledButtonContainer>
    </StyledInputContainer>
  </StyledAddTodoContainer>
}


export default AddTodoComponent;