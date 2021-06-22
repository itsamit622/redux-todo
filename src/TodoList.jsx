
import { connect } from 'react-redux';
import React, { useState } from 'react'
import {HttpsReq} from './HttpsReq/HttpsRequest'
import { asyncAction, deleteTodofromactions, loadTodofromactions ,regularAction ,editTodofromactions} from './Actions/TodoActions';

 function TodoList(props) {

    React.useEffect( ()=> {
        props.loadAction()
        
    
      }, [])
    function deleteMe(id) {
       
            props.deleteAction(id)
        
        

    }
    function editMe(id,i) {
        console.log("helloji" ,i,id)
       
               props.edit(id,i)
    
    

}
    console.log("props",props)
    let todolist = props.list.map((values,i) => {
        return <li key={values.id}>{values.title} <button onClick={() => { deleteMe(values.id) }}>  Delete</button>  <button onClick={()=>{editMe(values.id,i)}} >Edit</button> </li> 
    })
    return <div>
        <ul>{todolist}</ul>
    </div>
}

function myStateToProps(state) {
    console.log("mystate", state)
    return {
        list: state.todolist
    }

    
}

// function mapDispatchToProps(dispatch) {
//     return {
//         "asyncAction": asyncAction(dispatch),
//         "regularAction": regularAction(dispatch)
//     }

// }

export default  connect(myStateToProps, {
    // "asyncAction": asyncAction,
    "loadAction" : loadTodofromactions,
    "deleteAction":deleteTodofromactions,
   "regularAction": regularAction,

   "edit":editTodofromactions
})(TodoList)