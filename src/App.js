import React, { useState } from "react";
import "./App.css";
import Headers from "./component/Header";
import Form2 from "./component/Form2";
import TodoList1 from "./component/TodoList1";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editTodo, seteditTodo] = useState(null);
  return (
    <div className="" container>
      <div className="wrapper">
        <div>
          <Headers />
        </div>
        <div>
          <Form2
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            seteditTodo={seteditTodo}
          />
        </div>
        <div>
          <TodoList1 />
          todos={todos}
          setTodos={setTodos}
          seteditTodo={seteditTodo}
        </div>
      </div>
    </div>
  );
};

export default App;
