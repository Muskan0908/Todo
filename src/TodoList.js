import React from 'react';
import Todo from './Todo';
const TodoList=(props)=>{
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {
          props.filteredTodos.map((elem)=>{
            return(
              <Todo key={elem.id} task={elem.text}
                      todos={props.todos} setTodos={props.setTodos}
                      todo={elem}/>

            );
          })
        }
      </ul>
    </div>
  )
}
export default TodoList;
