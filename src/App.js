import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/NavbarTop";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import ShowTodo from "./components/ShowTodo";
import Button from "./UI/Button";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "test",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      date: new Date().toISOString(),
      id: 1,
    },
    {
      name: "dateless tsest",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 2,
    },
  ]);
  //handles adding todos. increments the IdCount by 1 and then adds the todo to the todo array
  const addTodoHandler = (todo) => {
    console.log("invoked")
    setTodos((prevTodos) => {
      return [
        { name: todo.name, desc: todo.desc, date: todo.date, id: idCount +1 },
        ...prevTodos,
      ];
    });
    setIdCount((prevId) => prevId + 1);
  };
  const deleteTodoHandler = targetTodoID => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != targetTodoID)
    })
  }
  const updateTodoHandler = (targetTodoID, nameChange, descChange, dateChange) => {
   const updatedTodos = todos.map(todo => {
    if (todo.id === targetTodoID) {
      console.log(nameChange, descChange, dateChange)
      return {id: todo.id, name: nameChange, desc: descChange, date: dateChange}
    } else {
      return todo
    }
   })
   setTodos(updatedTodos)

  }
  //Used to give each item an id of the amt of prev elements + 1
  const [idCount, setIdCount] = useState(todos.length);
  const test = () => {
    console.log(todos)
  };
  return (
    <div>
      <NavbarTop />
      <AddTodo addTodo={addTodoHandler} />
      <ShowTodo  updateTodo={updateTodoHandler} deleteTodo={deleteTodoHandler} todoList={todos} />
      <Button text="test" onClick={test}></Button>
    </div>
  );
}

export default App;
