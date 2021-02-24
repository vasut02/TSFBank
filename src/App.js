import NavBar from './components/navbar/Navabar';
import './App.css';
import './CSS/Button.css';
import './CSS/Input.css';
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Transaction/>
    </div>
  );
}

export default App;
