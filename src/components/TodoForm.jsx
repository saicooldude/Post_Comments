import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
var tracke='0';
var nums;
function TodoForm(props) {
  const [input, setInput] = useState("");
  
  

  const handleChangeforCooment = (e) => {
    setInput(e.target.value);
  };
  
    
const handleSubmit = (e) => {
    e.preventDefault();
    
    if(props.commentvalue){
      nums=props.commentvalue;
      props.updateTodo(props.keyid);
      
    }
    else{
      nums=tracke;
      tracke=parseInt(tracke);
      tracke=tracke+1;
      tracke=tracke.toString();
    }
    
    
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      number: nums,
      sidevalue:0      
    });

    setInput("");

  };
  return (
    <div className="main">
      <div className="post__container">
        <div className="post__item-container">
          <div className="post__item">
            <div className="post__item--header">
              <div className="post__item--header-avatar">
                <img src="images/images/user.jpg" alt="user" />
              </div>
              <div className="post__item--header-details">
                <h4 className="heading-tertiary">Gowtham Kumar</h4>
                <p className="academic-details">Student, 12th</p>
                <p className="post-time-details">11th May 2021</p>
              </div>
            </div>
            {props.text ? (
              <div className="post_body">{props.text}</div>
            ) : (
              <>
                <div className="post__body">
                  Hey guys! I am struggling on this question. Any help would be
                  great?
                  <br />
                  Calculate the change in volumne? of an Iron block. If
                  temperature is changed from 10°C to 40°C. Given coefficient of
                  linear expansion is 2.
                </div>
              </>
            )}
            <div className="post__footer">
              <div className="post__footer--comments">
                <div className="like">Like</div>
                <div className="comment">
                  <form className="todo-form" onSubmit={handleSubmit}>
                    <input
                      placeholder="Add a Comment"
                      value={input}
                      onChange={handleChangeforCooment}
                      name="text"
                      className="todo-input"
                    
                    />
                    <button onClick={handleSubmit} className="todo-button">
                      Comment
                    </button>
                  </form>
                </div>
              </div>
              <div className="post__footer--actions">
                <a className="post__footer--actions-link" href="#">
                  Bookmark
                </a>
                <a className="post__footer--actions-link" href="#">
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>


  );
}

export default TodoForm;

// return (
//   <form className="todo-form" onSubmit={handleSubmit}>
//     {props.edit ? (
//       <>
//         <input
//           placeholder='Update your item'
//           value={input}
//           onChange={handleChange}
//           name='text'
//           ref={inputRef}
//           className='todo-input edit'
//         />
//         <button onClick={handleSubmit} className='todo-button edit'>
//           Update
//         </button>
//       </>
//     ) : (
//       <>
//         <input
//           placeholder='Add a todo'
//           value={input}
//           onChange={handleChange}
//           name='text'
//           className='todo-input'
//           ref={inputRef}
//         />
//         <button onClick={handleSubmit} className='todo-button'>
//           Add todo
//         </button>
//       </>
//     )}
//   </form>
// );
