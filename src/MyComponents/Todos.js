import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {

  let todoStyle = {
    minHeight : "20vh",
    margin: "50px auto"
  }
  return (
    <div className= "container" style={todoStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" : 
      props.todos.map((todo) => {
          return <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
      })
    }
       
      </div>
  )
}
