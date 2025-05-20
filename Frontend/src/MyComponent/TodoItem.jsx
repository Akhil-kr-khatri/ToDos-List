import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoItem = ({ todo, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">Title: {todo.title}</h5>
        <p className="card-text">Description: {todo.desc}</p>
        <button className="btn btn-outline-primary btn-sm me-2" onClick={() => navigate(`/edit/${todo.id}`)}>Update</button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
