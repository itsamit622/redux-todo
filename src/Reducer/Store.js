import TodoReducer from './TodoReducer'
import { createStore , applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const Store = createStore(TodoReducer ,applyMiddleware(thunk))


export default Store;
