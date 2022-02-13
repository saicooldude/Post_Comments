import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
// import Main from "../Main";
import Ds from "../Ds";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    
    const newTodos = [ ...todos,todo];
    setTodos(newTodos);
    
  };

  const updateTodo=(todoId)=>{
    let updatedTodos=todos.map(todo=>{
      if(todo.id===todoId){
        todo.sidevalue=todo.sidevalue+1;

      }
      return todo;
    }) 
    setTodos(updatedTodos);

    // setTodos(prev=>prev.map(item=>(item.id ===todoId ? newValue :item )));


  }
  const completeTodo=(id)=>{
    let updatedTodos=todos.map(todo=>{
      if(todo.id===id){
        todo.isComplete=!todo.isComplete

      }
      return todo;
    }) 
    setTodos(updatedTodos);
  };


  const removeTodo=(id)=>{
    const removeArr=[...todos].filter(todo=>todo.id!==id);
    setTodos(removeArr);
  };

  return (
    <>
      <h1>Whats the plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      {/* <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} onSubmit={addTodo}/> */}
      <Ds todos={todos} onSubmit={addTodo} updateTodo={updateTodo}/>

    </>
  );
}
export default TodoList;

