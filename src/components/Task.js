import React, {useState} from "react";

function Task({text, category, deleteHandler}) {
  function handleDelete(){
    deleteHandler(text, category);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick = {handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
