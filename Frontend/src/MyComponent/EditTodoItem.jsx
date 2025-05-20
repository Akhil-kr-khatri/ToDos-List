import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTodoItem = ({ todos, editTodo }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find(t => t.id === parseInt(id));

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Please fill in all fields");
      return;
    }
    editTodo({ id: todo.id, title, desc });
    navigate('/');
  };

  return (
    <div className="container my-3">
      <h3>Edit Todo</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success w-100">Update Task</button>
      </form>
    </div>
  );
};

export default EditTodoItem;
