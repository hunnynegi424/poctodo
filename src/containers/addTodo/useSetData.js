import { useState } from 'react';
import { getFromLocalStorage, saveInLocalStorage } from '../../common/utils';

const initialInput = { title: '', description: '' }

const useSetData = () => {

  const [newTodo, setNewTodo] = useState(initialInput);

  const onInputChange = (type, value) => setNewTodo(prev => ({ ...prev, [type]: value }));

  const onAddTodo = () => {
    if(newTodo.title || newTodo.description) {
      const storedList = getFromLocalStorage('todo');
      saveInLocalStorage('todo', [newTodo, ...storedList])
      setNewTodo(initialInput);
    }
  };

  return {
    newTodo,
    onInputChange,
    onAddTodo,
  }
}

export default useSetData;