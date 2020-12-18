import React,{ useEffect} from 'react';
import './style.css';

const Home=(props)=>{

useEffect(()=>{
  handleFilter();
},[props.todos,props.status]);


const handleSubmit=(e)=>{
  e.preventDefault();
  if(props.inputTask!==""){
  props.setTodos([
    ...props.todos,{text:props.inputTask,completed:false,id:Math.random()*1000}
  ]);
  console.log(props.todos);
  props.setInputTask("");
}};

const handleStatus=(e)=>{
  props.setStatus(e.target.value);
}

const handleFilter=()=>{
  switch(props.status){
    case 'completed':
    props.setFilteredTodos(props.todos.filter(todo=>todo.completed===true));
    break;
    case 'uncompleted':
    props.setFilteredTodos(props.todos.filter(todo=>todo.completed===false));
    break;
    default:
    props.setFilteredTodos(props.todos);
    break;
  }
}
  return(
    <div className="main">
    <h1>To Do</h1>
      <form>
            <label>Task</label><br/>
            <input value={props.inputTask}type="text" onChange={(e)=>{props.setInputTask(e.target.value)}}/><br/>
            <input type="submit" value="Add" onClick={handleSubmit}/>
        
        </form>
        <div className="select">
          <select name="todos" className="filter-todos" onChange={handleStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>


    </div>
  );
}
export default Home;
