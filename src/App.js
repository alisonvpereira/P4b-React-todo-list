import React, {useState} from "react";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";

function App() {
  //variables
  const [todos, setTodos] = useState([
    {text: "Learn about React", isCompleted: false},
    {text: "Meet friend for lunch", isCompleted: false},
    {text: "Build rally cool todo app", isCompleted: false}    
  ]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //template
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem 
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;