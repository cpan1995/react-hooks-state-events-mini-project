import React, {useState} from "react";

function NewTaskForm({categories, handleNewTask}) {
  const [newTask, setNewTask] = useState({
    category: 'Code',
    text: '',
  })

  let storeOptions = []
  
  for (let i = 1; i< categories.length; i++){
    storeOptions.push
    (
      <option value = {categories[i]} key = {categories[i]+i}>{categories[i]}</option>
    )
  }

  function handleInput(e){
    let name = e.target.name
    let value = e.target.value
    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    handleNewTask(newTask)
  }

  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange = {handleInput} value = {newTask.text} name = "text"/>
      </label>
      <label>
        Category
        <select name="category">
          {storeOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
