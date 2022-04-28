import { ListItemComponent } from "../../components/list";
import useGetListItemData from "./useGetListItemData";

const ListItemContainer = (props) => {

  const {
    index,
    item,
    editMode,
    editedInput,
    onEditClick,
    onCancelEdit,
    onInputChange,
    onSave,
  } = useGetListItemData(props);

  return <ListItemComponent
    {...{
      index,
      item,
      editMode,
      editedInput,
      onEditClick,
      onCancelEdit,
      onInputChange,
      onSave,
    }}
  />
}

export default ListItemContainer;