import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <input type="text" value={item.text} />
    </div>
  );
};

export default TodoItem;
