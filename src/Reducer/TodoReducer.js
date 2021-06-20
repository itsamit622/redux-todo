import axios from "axios";
import React, { useState } from "react";
import { LOADTODO, DELETETODO, ADDTODO } from "../Actions/TodoTypes";

function TodoReducer(
  state = {
    todolist: [
      // {
      //   "title": "Test Todo",
      //   "complete": false,
      //   "id": 9
      // }
    ],
  },

  action
) {
  switch (action.type) {
    case ADDTODO:
      const todos3 = state.todolist.concat(action.payload);
      return { ...state, todolist: todos3 };
      // return  {...state ,...action.payload}
    case LOADTODO:
      console.log("sdsds", action.payload);
      const todos2 = state.todolist.concat(action.payload);
      return { ...state, todolist: todos2 };
    case DELETETODO:
      const todo3 = state.todolist.filter(
        (value) => value.id !== action.payload
      );
      return {
        ...state,
        todolist: todo3,
      };
  }

  return state;
}

export default TodoReducer;
