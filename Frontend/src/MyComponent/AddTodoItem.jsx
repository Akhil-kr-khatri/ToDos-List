import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AddTodoItem = ({ addTodo }) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please fill in all fields");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
            navigate("/")
        }

    }
    return (
        <div>
            <div className="container my-3">
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary w-100">
                            Add Task
                        </button>
                    </div>
                    <div className="mt-4">
                        <button type="button" className="btn btn-secondary w-100" onClick={() => navigate("/")}>
                            Go Home
                        </button>
                    </div>

                </form>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AddTodoItem
