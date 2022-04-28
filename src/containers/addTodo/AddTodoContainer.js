import useSetData from "./useSetData"
import AddTodoComponent from '../../components/addTodo';


const AddTodoContainer = () => {
  const {
    newTodo,
    onInputChange,
    onAddTodo,
  } = useSetData();

  return <AddTodoComponent {...{
    newTodo,
    onInputChange,
    onAddTodo,
  }} />
}

export default AddTodoContainer;