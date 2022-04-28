import AppHeader from './containers/header';
import AddTodoContainer from './containers/addTodo';
import ListContainer from './containers/list';
import ActionPaneContainer from './containers/actionPane';
import { StyledAppContainer } from './App.styles';

function App() {
  return (
    <StyledAppContainer>
      <AppHeader />
      <AddTodoContainer />
      <ActionPaneContainer />
      <ListContainer />
    </StyledAppContainer>
  );
}

export default App;
