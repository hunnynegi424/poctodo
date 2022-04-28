import { useState, useEffect } from 'react';

// components
import { getFromLocalStorage, saveInLocalStorage } from '../../common/utils';


const useGetData = () => {

  const [listOfTodo, setListOfTodo] = useState([]);

  const storedList = getFromLocalStorage('todo');
  useEffect(() => {
    setListOfTodo(storedList);
  }, [storedList]);

  const onDeleteItem = (index) => {
    const newList = storedList.filter((f, i) => i !== index);
    saveInLocalStorage('todo', newList)
  }

  return { listOfTodo, onDeleteItem }
}

export default useGetData;