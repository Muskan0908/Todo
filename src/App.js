import './App.css';
import React,{ useState } from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import NavBar from './NavBar';
import TodoList from './TodoList';
import './style.css';

function App() {

  const [inputTask,setInputTask]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  return (
    <Router>
    <div className="App">
    <div className="main">
    <NavBar />


    <Switch>
        <Route exact path="/Todo">
          <Home
                inputTask={inputTask} setInputTask={setInputTask}
                todos={todos} setTodos={setTodos}
                status={status} setStatus={setStatus}
                filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}
                />
          <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
        </Route>

        <Route exact path="/about" component={About}/>
        <Route path="*" component={Error}/>
    </Switch>
  </div>
    </div>
    </Router>
  );
}

export default App;
