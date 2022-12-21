import React, { useState } from 'react';
import  './newToto.modiul.css';

const NewTodo = (props) => {

const [todo, setTodo] = useState({title : '',  desc : ''})
    const {title, desc} = todo;

    
    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo,  [name]: event.target.value}
        })
        
    }

    const handleOnSubmit = (event) =>{
       
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title : '', desc : ""})
    }

  return (
    <form className='form' onSubmit={handleOnSubmit}>
        <div className="form-field">
            <label className='form-field-level' htmlFor="title"> Title :</label>
            <input className='form-field input' 
            type="text" 
            id='title' 
            name='title'
            value={title}
            onChange={handleChange}/>
        </div>

        <div className="form-field">
            <label className='form-field-level' htmlFor="desc"> Description :</label>
            <textarea className='form-field textaarea'
             type="text" 
             id='desc' 
             name='desc'  
             value={desc} 
             onChange={handleChange}/>
        </div>

        <button className='form-button' type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;