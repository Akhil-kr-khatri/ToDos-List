const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: { type: Number, required: true , unique:true}, // <-- Custom ID field
  title: { type: String, required: true },
  desc: { type: String, required: true }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
