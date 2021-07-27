import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentCategory, setCurrentCategory] = useState("All")
  const [currentTasks, setCurrentTasks] = useState(TASKS)

  // if(currentCategory === 'All'){
  //   setCurrentTasks(TASKS)
  // }
  // else {
  //   let newArray = currentTasks.filter(task => task.category === currentCategory)
  //   setCurrentTasks(newArray);
  // }

  function handleFilter(newCat){
    if(newCat === 'All'){
      setCurrentTasks(TASKS)
    }
    else {
      let newArray = TASKS.filter(task => task.category === newCat)
      setCurrentTasks(newArray);
    }
  }
  function handleDelete(currentTask1, currentCat1){
    let newArray = currentTasks.filter(task => {
      if(!(task.text === currentTask1 && task.category === currentCat1)){
        return task
      }
    })
    setCurrentTasks(newArray)
  }
  function onTaskFormSubmit(newTask){
    setCurrentTasks([
      ...currentTasks,
      newTask
    ])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList tasks = {currentTasks} handleDelete = {handleDelete}  />
    </div>
  );
}

export default App;
