import { HttpsReq } from './HttpsReq/HttpsRequest'
import {connect} from 'react-redux';
import axios from 'axios'
import {loadTodofromactions ,addTodofromactions ,tempTodofromactions, editTodofromactions2} from './Actions/TodoActions'
import React, { useState } from 'react'

import { ADDTODO } from './Actions/TodoTypes';


 function Addtodo(props){

    console.log("data",props.tempValue)
    // whyconst[todo,setTodo]=React.useState({
//     title:""
// })
// const[todoList,setTodoList]=React.useState([{
//     title:"",
//     complete:false,
//     id:""
// }])
// const[todo,setTodo]=React.useState()



// const[todoList,setTodoList]=React.useState([])

   

    
    // let  onChangetodo=()=>{
        

    //   }
    const changeMe=(event)=>{

     props.temp(event.target.value)
        // setTodo({
        //   title :  event.target.value
        // })


    }
    

    const addMe=()=>{
        // HttpsReq.post("todos" ,singleTodo).then((res)=>{
    //         todoList.push(res.data)

    //  //       why push not working dd
    //         setTodoList([todoList])
            
        
             
           
        // })
        let singleTodo = {
            title: props.tempValue,
            complete: false,
            
          }
     props.add(singleTodo)

    

        
    }
    const update=()=>{

       
        let singleTodo = {
            title: props.tempValue,
            complete: false,
           
        }
        console.log("my id",props.selected)
     props.edit2(
        singleTodo
         ,
         props.selected)

    

        
    }



    return <div>
        <h3>Add new Todo </h3>
        <input type="text" value={props.tempValue} onChange={changeMe} />
        <button  onClick={addMe} >ADD</button>
        <button  onClick={update} >update</button>
    </div>
}

// function mapDispatchToProps(dispatch){
//     return {
//         "loadTodos": loadTodofromactions(dispatch),
//         "addTodos":addTodofromactions(dispatch)
        
        
//     }
    

// }
function myStateToProps(state) {
    console.log("mystate", state)
    return {
        tempValue: state.tempValue.title,
        selected:state.selectAction
    }

    
}


export default connect (myStateToProps, {add: addTodofromactions ,temp:tempTodofromactions,edit2:editTodofromactions2})(Addtodo)