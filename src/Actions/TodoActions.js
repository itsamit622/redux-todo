import {LOADTODO ,DELETETODO ,ADDTODO} from "../Actions/TodoTypes"
import { HttpsReq } from "../HttpsReq/HttpsRequest"



export const loadTodofromactions = function(dispatch){
    return (data)=>{
        let action = {
            type : LOADTODO,
            payload :data
        }
        dispatch(action)
    }
}
export const deleteTodofromactions = function(dispatch){
   
    return (data)=>{
        let action = {
            type : DELETETODO,
            payload :data
        }
        dispatch(action)
    }
}
export const addTodofromactions = function(dispatch){
   
    return (data)=>{
        let action = {
            type : ADDTODO,
            payload :data
        }
        dispatch(action)
    }
}