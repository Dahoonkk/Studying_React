import React from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItemCreator from "./components/TodoItemCreator";
import { filteredTodoListState, todoListState } from "./todoAtoms";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";

function App() {
  // const todoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  console.log(filteredTodoList);

  return (
    <div className="App">
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
