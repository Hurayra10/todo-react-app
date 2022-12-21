import React from 'react';
import './todo.modiul.css'

const Todo = (props) => {
    const {  title, desc} = props.todo;
    const {id} = props;
    console.log(props.todo.title);

    const handleClick =(id) =>{
      props.onRemoveTodo(id)
    }

  return (
    <article className='todo'>
        <div>
            <h3>Title : {title}</h3>
            <p>Desc : {desc}</p>
        </div>
       <div>
        <button className='btn' onClick={()=>{handleClick(id)}}>
            < i className='fa fa-trash fa-2x'></i>
        </button>
       </div>
    </article>
  )
}

export default Todo