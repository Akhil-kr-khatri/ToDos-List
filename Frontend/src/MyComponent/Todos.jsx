import React from 'react'
import TodoItem from './TodoItem'
import { Link } from "react-router-dom"

const Todos = (props) => {
  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">ToDos List</h3>

      {props.todos.length === 0 ? (
        <p className="text-muted text-center">No tasks to display.</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete} />
        ))
      )}
      <Link to="/AddTodoItem">
        <div className="mt-4">
          <button type="button" className="btn btn-primary w-100">
            Add Task
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Todos
