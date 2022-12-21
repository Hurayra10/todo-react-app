import React from 'react'
import Todo from './Todo';
import "./todos.modiul.css"

const Todos = (props) => {
    // console.log(props.todos);
  return (
    <section className='todos'>
        {
            props.todos.map((todo)=> <Todo 
            key={todo.id} 
            todo ={todo.todo}
            id = {todo.id}
            onRemoveTodo = {props.onRemoveTodo}
            />)
        }

    </section>
  )
}

export default Todos;