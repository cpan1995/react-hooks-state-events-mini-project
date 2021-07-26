import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentCategory, setCurrentCategory] = useState("All")
  const [currentTasks, setCurrentTasks] = useState(TASKS)

  console.log(currentTasks)

  function handleFilter(newCat){
    setCurrentCategory(newCat)
  }

  function handleNewTask(newTask){
    setCurrentTasks([
      ...currentTasks,
      newTask
    ])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories = {CATEGORIES} handleNewTask = {handleNewTask}/>
      <TaskList tasks = {currentTasks} currentCategory ={currentCategory}  />
    </div>
  );
}

export default App;
