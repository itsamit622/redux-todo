
import { connect } from 'react-redux';
import {HttpsReq} from './HttpsReq/HttpsRequest'
import { deleteTodofromactions } from './Actions/TodoActions';

 function TodoList(props) {


    function deleteMe(id) {
        HttpsReq.delete("todos/" + id).then((res)=>{
            props.deletetodo(id)
        
        }) 

    }
    
    console.log("props",props)
    let todolist = props.list.map((values) => {
        return <li>{values.title} <button onClick={() => { deleteMe(values.id) }}>  Delete</button></li> 
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
function mapDispatchToProps(dispatch) {
    return {
        "deletetodo": deleteTodofromactions(dispatch),
        


    }

}

export default  connect(myStateToProps,mapDispatchToProps)(TodoList)