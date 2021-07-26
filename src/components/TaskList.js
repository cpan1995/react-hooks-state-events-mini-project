import React from "react";
import Task from "./Task.js"
import { useState } from "react";


function TaskList({tasks, currentCategory}) {
  const [currentTasks, setTask] = useState(tasks)
  let taskDivs = []
  console.log(tasks)
  if(currentCategory === 'All'){
    taskDivs = currentTasks.map(element => {
      return(
      <Task
        key = {element.text + element.category}
        taskText = {element.text}
        taskCat = {element.category}
        deleteHandler = {handleDelete} 
      />)
    })
  }else{
    taskDivs = currentTasks.filter(element => element.category === currentCategory )
    taskDivs = taskDivs.map(element => {
      return(
        <Task 
          key = {element.text + element.category}
          taskText = {element.text}
          taskCat = {element.category}
          deleteHandler = {handleDelete} 
        />
      )
    })
  }
  

  function handleDelete(currentTask1, currentCat1){
    let newArray = currentTasks.filter(task => {
      if(!(task.text === currentTask1 && task.category === currentCat1)){
        return task;
      }
    })
    setTask(newArray);
  }
  return (
    <div className="tasks">
      {taskDivs}
    </div>
  );
}

export default TaskList;
