const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModels');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
  }
});

router.post('/', async (req, res) => {
  try {
    const lastTodo = await Todo.findOne().sort({ id: -1 });
    const newId = lastTodo ? lastTodo.id + 1 : 1;

    const newTodo = new Todo({
      id: newId,
      title: req.body.title,
      desc: req.body.desc
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error saving todo", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const updated = await Todo.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      { title, desc },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.findOneAndDelete({ id: parseInt(req.params.id) });
    if (!deleted) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo", error });
  }
});

module.exports = router;
