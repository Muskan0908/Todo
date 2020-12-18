import React from 'react';
const Todo=(props)=>{

  const handleDelete=()=>{
    props.setTodos(props.todos.filter((el)=>el.id!==props.todo.id))
  }

  const handleComplete=()=>{
    props.setTodos(props.todos.map((item)=>{
      if(item.id===props.todo.id){
        return{
        ...item,completed: !item.completed
      };
    }
    return item;
    }));
  };
  return(
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.task}</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fa fa-check"/>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fa fa-trash"/>
      </button>
    </div>
  )
}
export default Todo;
