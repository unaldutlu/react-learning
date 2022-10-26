import A from './components/A'
import B from './components/B'
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <p style={{ color: "blue", "background-color": "red", fontSize: 50 }}>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
