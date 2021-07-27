import React from "react";
import Task from "./Task.js"
import { useState } from "react";


function TaskList({tasks, handleDelete}) {
  let taskDivs = tasks.map(element => <Task 
                                      key = {element.text + element.category}
                                      text = {element.text}
                                      category = {element.category}
                                      deleteHandler = {handleDeletetoParent}
                                      />)
  
  function handleDeletetoParent(currentTask1, currentCat1){
    handleDelete(currentTask1, currentCat1);
  }

  return (
    <div className="tasks">
      {taskDivs}
    </div>
  );
}

export default TaskList;
