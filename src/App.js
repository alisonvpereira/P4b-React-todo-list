import React, {useState} from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  //variables
  const [todo, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build rally cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todo, text];
    setTodos(newTodos);
  };

  //template
  return (
  <div>
    <h1>My todo list</h1>
    {todo.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
    ))}
    <TodoForm addTodo={addTodo} />
  </div>
  );
}

export default App;