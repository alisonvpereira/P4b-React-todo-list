import React, {useState} from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
  <div>
    <h1>My todo list</h1>
    <TodoItem todo="Finish Plus project"/>
    <TodoItem todo="Feed cat"/>
    <TodoItem todo="Be awesome"/>
  </div>
  );
}

export default App;