import Card from "../UI/Card"
import DisplayTodoItem from "./DisplayTodoItem"
const ShowTodo = props => {
return (
    <Card title="Todo list">
        {props.todoList.length > 0 ? props.todoList.map(todo => {
       return <DisplayTodoItem updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} key={todo.id} id={todo.id} title={todo.name} date={todo.date} desc={todo.desc}></DisplayTodoItem>
      
      }) : 'no data'}
    
    </Card>
)
}

export default ShowTodo