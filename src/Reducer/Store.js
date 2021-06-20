import TodoReducer from './TodoReducer'
import { createStore } from "redux";

const Store = createStore(TodoReducer)

export default Store;
