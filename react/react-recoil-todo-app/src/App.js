import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { todoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
