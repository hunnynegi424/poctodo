import ListComponent from '../../components/list';
import useGetListData from './useGetListData';

const ListContainer = () => {

  const { listOfTodo, onDeleteItem } = useGetListData();

  return <ListComponent {...{
    list: listOfTodo,
    onDeleteItem,
  }} />
}

export default ListContainer;