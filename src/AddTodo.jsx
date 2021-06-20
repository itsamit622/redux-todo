import { HttpsReq } from './HttpsReq/HttpsRequest'
import {connect} from 'react-redux';
import axios from 'axios'
import {loadTodofromactions ,addTodofromactions} from './Actions/TodoActions'
import React, { useState } from 'react'

import { ADDTODO } from './Actions/TodoTypes';


 function Addtodo(props){

    console.log("data",props)
    // whyconst[todo,setTodo]=React.useState({
//     title:""
// })
// const[todoList,setTodoList]=React.useState([{
//     title:"",
//     complete:false,
//     id:""
// }])
const[todo,setTodo]=React.useState()
const[todoList,setTodoList]=React.useState([])

   

    
    // let  onChangetodo=()=>{
        React.useEffect(function () {
            HttpsReq.get("todos").then((res) => {
              props.loadTodos(res.data)
              
            })
        
          }, [])

    //   }
    const changeMe=(event)=>{

setTodo(event.target.value)
        // setTodo({
        //   title :  event.target.value
        // })


    }
    let singleTodo = {
        title: todo,
        complete: false
      }

    const clickMe=()=>{
        HttpsReq.post("todos" ,singleTodo).then((res)=>{
    //         todoList.push(res.data)

    //  //       why push not working dd
    //         setTodoList([todoList])
            props.addTodos(res.data)
        
             
           
        })

        setTodo("")
        

        
    }

    return <div>
        <h3>Add new Todo </h3>
        <input type="text" value={todo} onChange={changeMe} />
        <button  onClick={clickMe} >ADD</button>
    </div>
}

function mapDispatchToProps(dispatch){
    return {
        "loadTodos": loadTodofromactions(dispatch),
        "addTodos":addTodofromactions(dispatch)
        
        
    }
    

}


export default connect (null,mapDispatchToProps)(Addtodo)