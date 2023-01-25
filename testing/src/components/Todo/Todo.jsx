import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { XCircleIcon } from "@heroicons/react/24/solid";

function Todo() {
  const [form, setForm] = useState();
  const [todos, setTodos] = useState([]);
  const [through, setThrough] = useState(false);

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
      toast("Başarıyla Eklendi...", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const removeClick = (e) => {
    todos.splice(e, 1);
    setTodos([...todos]);
    toast.success("Başarıyla Kaldırıldı...");
  };

  return (
    <div className='flex flex-col justify-start items-center bg-red-200 w-[25rem] h-[34rem] shadow-2xl'>
      <h1>Todo</h1>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center items-center'
      >
        <input
          name='name'
          value={form}
          onChange={handleChange}
          autoComplete='off'
          className='border-2 border-gray-500 rounded-xl pl-3'
        />
        &nbsp;
        <button
          onClick={notify}
          className='border-2 border-gray-500 rounded-xl px-2 bg-blue-300 hover:bg-blue-500'
        >
          Add
        </button>
        <Toaster />
      </form>
      <div className='w-full mt-5 px-2'>
        {todos.map((el, i) => (
          <div key={i} className='my-2'>
            <ul>
              <li className='flex justify-between border-b-2 border-b-white'>
                <span className='break-all px-2'>
                  {i + 1}) <span>{el}</span>
                </span>
                <span>
                  <XCircleIcon
                    className='h-6 w-6 text-blue-500 hover:text-red-500'
                    onClick={() => removeClick(i)}
                  />
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
