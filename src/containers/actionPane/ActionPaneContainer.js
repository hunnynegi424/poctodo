import ActionPaneComponent from '../../components/actionPane';
import useActionPane from './useActionPane';


const ActionPaneContainer = () => {

  const {
    onExport,
    onClearList,
  } = useActionPane();
  return <ActionPaneComponent {...{ onExport, onClearList }} />
}

export default ActionPaneContainer;