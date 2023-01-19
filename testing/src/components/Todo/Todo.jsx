import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Todo() {
  const [form, setForm] = useState();
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }
    setTodos([...todos, form]);
    setForm("");
  };

  const notify = () => {
    if (form !== "") {
      toast("Tebrikler...", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={form}
          onChange={handleChange}
          autoComplete='off'
        />
        &nbsp;
        <button onClick={notify}>Add</button>
        <Toaster />
      </form>
      <div>
        {todos.map((el, i) => (
          <div key={i}>
            <ul>
              <li>{el}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
