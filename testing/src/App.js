import "./App.css";
// import Counter from "./components/Counter";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className='flex justify-center items-center bg-blue-300 min-h-screen'>
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}

export default App;
