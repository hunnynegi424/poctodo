import { useState } from 'react';

// components
import { getFromLocalStorage, saveInLocalStorage } from '../../common/utils';

const useGetListItemData = (props) => {

  const { index, item } = props;
  const [editMode, setEditMode] = useState(false);
  const [editedInput, setEditedInput] = useState({ title: '', description: '' });

  const onInputChange = (type, value) => setEditedInput(prev => ({ ...prev, [type]: value }));

  const onEditClick = () => {
    setEditedInput(item);
    setEditMode(true);
  }

  const onCancelEdit = () => setEditMode(false);

  const onSave = (index) => {
    console.log('index', index);
    console.log('editedInput', editedInput);
    const storedList = getFromLocalStorage('todo');
    if(editedInput.title || editedInput.description) {
      const newList = storedList.map((t, i) => {
        if(i === index) return editedInput;
        else return t;
      });
      saveInLocalStorage('todo', newList);
    }
    setEditMode(false);
  }

  return {
    index,
    item,
    editMode,
    editedInput,
    onEditClick,
    onCancelEdit,
    onInputChange,
    onSave,
  }
}

export default useGetListItemData;