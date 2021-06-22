import axios from "axios";
import React, { useState } from "react";
import {
  LOADTODO,
  DELETETODO,
  ADDTODO,
  TEMPTODO,
  EDITTODO,
  EDITTODO2,
} from "../Actions/TodoTypes";

function TodoReducer(
  state = {
    todolist: [
      // {
      //   "title": "Test Todo",
      //   "complete": false,
      //   "id": 9
      // }
    ],

    tempValue: {
      title: "",
    },
    selectAction: "",
  },

  action
) {
  switch (action.type) {
    case ADDTODO:
      const todos3 = state.todolist.concat(action.payload);
      state.tempValue.title=""
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

    case TEMPTODO:
      state.tempValue.title = action.payload;
console.log("temp",state)
      let newstate = { ...state };
      return newstate;
    case EDITTODO:
      console.log("Actiosss",action)
      return {
        ...state,
        tempValue: { ...state.todolist[action.payload.index] },
        selectAction: action.payload.id,
      };
    case EDITTODO2:
      console.log("mu", action);
      let newTitles = state.todolist.map((todod, i) =>{
        if(todod.id !== action.payload.id){
          return todod;
        }else {
          return action.payload
        }
      });
      state.tempValue.title=""
    return{...state,
      todolist: newTitles,
      

    }
  }

  return state;
}

export default TodoReducer;
