import React, { useState } from "react";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        placeholder="Write your do list"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default NewTodoForm;
