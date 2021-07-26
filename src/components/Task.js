import React, {useState} from "react";

function Task({taskText, taskCat, deleteHandler}) {
  function handleDelete(){
    deleteHandler(taskText, taskCat);
  }
  return (
    <div className="task">
      <div className="label">{taskCat}</div>
      <div className="text">{taskText}</div>
      <button onClick = {handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
