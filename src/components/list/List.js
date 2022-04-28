import { StyledList } from './List.styles';
import { ListItemContainer } from '../../containers/list';

const ListComponent = (props) => {

  const { list, onDeleteItem } = props;

  return <StyledList>
    {list.map((item, index) => (item.title || item.description) && <ListItemContainer
      key={`${item.title}${index}`}
      {...{
        item,
        index,
        onDeleteItem: () => onDeleteItem(index),
      }}
    />)}
  </StyledList>
}

export default ListComponent;