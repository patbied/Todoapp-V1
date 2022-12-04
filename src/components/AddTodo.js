import Card from "../UI/Card"
import AddTodoForm from "./AddTodoForm"



const AddTodo = props => {
    return (
       <Card title='Add todo'>
        <AddTodoForm addTodo={props.addTodo}/>
       </Card>
    
    )
}
export default AddTodo