//for defining the database schemas
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:nPo0ijl6zQRvtk78@cluster0.h8h13by.mongodb.net/todo-app"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: { type: String, required: true },
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = { todo: todo };
