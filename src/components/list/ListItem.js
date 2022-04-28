// components
import {
  StyledListItem,
  StyledButton,
  StyledButtonContainer,
  StyledDescription,
  StyledTitle,
} from './List.styles';
import AddTodoComponent from '../addTodo';

const ListItemComponent = (props) => {

  const {
    index,
    item: {
      title,
      description
    },
    editMode,
    editedInput,
    onEditClick,
    onCancelEdit,
    onInputChange,
    onSave,
    onDeleteItem,
  } = props;

  return <>
    {editMode ?
      <AddTodoComponent {...{
        newTodo: editedInput,
        onCancel: onCancelEdit,
        onInputChange,
        onAddTodo: () => onSave(index),
      }} /> :
      <StyledListItem>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledButtonContainer>
          <StyledButton onClick={onEditClick}>Edit</StyledButton>
          <StyledButton onClick={onDeleteItem}>Delete</StyledButton>
        </StyledButtonContainer>
      </StyledListItem>}
  </>
}

export default ListItemComponent;
