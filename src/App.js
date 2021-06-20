import TodoList from './TodoList'
import Addtodo from './AddTodo';
import Store from "./Reducer/Store"

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store ={Store}>
    <div className="App">
    <Addtodo/>
    <TodoList/>
    </div>
    </Provider>
  );
}

export default App;
