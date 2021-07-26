import React, {useState} from "react";

function CategoryFilter({categories, handleFilter}) {
  const [selected, setSelected] = useState('All')
 
  let displayCategories = categories.map(category => {

    return <button 
    key= {category} 
    onClick = {handleClick} 
    className = {selected === category ? 'selected': '' }
    >{category}</button>
    })

  function handleClick(e){
    handleFilter(e.target.textContent)
    setSelected(e.target.textContent)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
