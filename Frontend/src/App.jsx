import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./MyComponent/Header";
import Footer from './MyComponent/Footer';
import Todos from "./MyComponent/Todos";
import AddTodoItem from "./MyComponent/AddTodoItem";
import EditTodoItem from "./MyComponent/EditTodoItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title, desc) => {
  const res = await axios.post("http://localhost:5000/todos", { title, desc });
  setTodos([...todos, res.data]);
};

const onDelete = async (todo) => {
  await axios.delete(`http://localhost:5000/todos/${todo.id}`);
  setTodos(todos.filter((t) => t.id !== todo.id));
};

const editTodo = async (updatedTodo) => {
  const res = await axios.put(
    `http://localhost:5000/todos/${updatedTodo.id}`,
    updatedTodo
  );
  setTodos(todos.map(t => t.id === updatedTodo.id ? res.data : t));
};


  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
            <Route path="/AddTodoItem" element={<AddTodoItem addTodo={addTodo} />} />
            <Route path="/edit/:id" element={<EditTodoItem todos={todos} editTodo={editTodo} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
