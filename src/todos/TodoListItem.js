import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="button-container">
        <button className="completed-button">Mark As Complete</button>
        <button className="removed-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
