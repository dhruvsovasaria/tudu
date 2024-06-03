import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
function App() {
  cosnt[(todos, setTodos)] = useState([]);

  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          {
            title: "gym",
            description: " go to the gym",
            completed: false,
          },
        ]}
      ></Todos>
    </div>
  );
}

export default App;
