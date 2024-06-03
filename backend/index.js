const express = require("express");
const { createTodo, updateTodo } = require("../backend/types"); // Assuming updateTodo is defined here as well
const { todo } = require("./db"); // Assuming this is the correct way to import your database model
const app = express();
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      message: "Invalid input data",
      errors: parsedPayload.error.errors,
    });
    return;
  }
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    console.log(createPayload.description);
    res.status(201).json({
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      message: "Invalid input data",
      errors: parsedPayload.error.errors,
    });
    return;
  }
  try {
    await todo.update(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
    res.status(200).json({
      message: "Todo marked as completed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
