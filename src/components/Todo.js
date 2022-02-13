import React, { useState } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({todos,completeTodo,removeTodo,updateTodo,onSubmit}) => {
    const [edit,setEdit]=useState({
        id:null,
         value:''
    });
   
    const submitUpdate=value=>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    } 
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }


return (
    todos.map((todo,index)=>(
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
      >
          {/* <Comments key={todo.id} text={todo.text} number={todo.number} onSubmit={onsubmit}/> */}
          <TodoForm key={todo.id} text={todo.text} number={todo.number} onSubmit={onSubmit}/>
          

         <div className='icons'>
           <RiCloseCircleLine 
               onClick={()=>removeTodo(todo.id)}
            />
           <TiEdit  
            onClick={()=>setEdit({id:todo.id, value:todo.text})}
           />
          </div>

        </div>  
    ))
);
};

export default Todo;


// return (
//     todos.map((todo,index)=>(
//       <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//       key={index}
//       >
//           <div key={todo.id} onClick={()=>completeTodo(todo.id)}>{ todo.text}</div>
//           <div className='icons'>
//            <RiCloseCircleLine 
//               onClick={()=>removeTodo(todo.id)}
//             />
//            <TiEdit  
//             onClick={()=>setEdit({id:todo.id, value:todo.text})}
//             />
//            </div>
//         </div>  
//     ))
// );