import {LOADTODO ,DELETETODO ,ADDTODO ,TEMPTODO,EDITTODO,EDITTODO2} from "../Actions/TodoTypes"
import { HttpsReq } from "../HttpsReq/HttpsRequest"

export const regularAction = (data) => {
    return({
        type: "demo",
        payload: data
    });
}


// export const asyncAction = () => {
//     return (dispatch)=> {
//         setTimeout(()=>{
//             dispatch ({
//                 type: "demo",
//                 payload: "data"
//             });
//         }, 1000);
//     }
// }


export const loadTodofromactions = ()=>{
    return (dispatch)=>{
        HttpsReq.get("/todos").then((res) => {           
     
        let action = {
            type : LOADTODO,
            payload :res.data
        }
        dispatch(action)
    })
    }

}
export const deleteTodofromactions = function(id){
   
    return (dispatch)=>{
        HttpsReq.delete("todos/" + id).then((res)=>{
      
        let action = {
            type : DELETETODO,
            payload :id
        }
        dispatch(action)
    }) 
    }
}
export const addTodofromactions = function(data){
   
    return (dispatch)=>{
        HttpsReq.post("todos" ,data).then((res)=>{
            
            let action = {
            type : ADDTODO,
            payload :res.data
        }
        dispatch(action)
    })
    }
}


export const tempTodofromactions = function(data){
    return (dispatch)=>{
        let action = {
            type : TEMPTODO,
            payload :data
        }
        dispatch(action)
    }
}

export const editTodofromactions = function(id,index){
    console.log("Edit",id)

    
    return (dispatch)=>{
        let action = {
            type : EDITTODO,
            payload :{id,index}
        }
        dispatch(action)
    }
}


export const editTodofromactions2 = function(data,id){
    
    return (dispatch)=>{
        HttpsReq.patch("todos/" +id,data).then((res)=>{
        let action = {
            type : EDITTODO2,
            payload :{...res.data,id}
        }
        dispatch(action)
    })
    }

}