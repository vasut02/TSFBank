import NavBar from './components/navbar/Navabar';
import './App.css';
import Home from "./components/Home/Home";
import Transaction from "./components/Transaction/Transaction";
import Customer from "./components/Cutomer/Customer"
import Send from './components/Send/Send'
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    //Router 
    /* Like A Swich statement */
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/customer' component={Customer} />
          <Route exact path='/send_money' component={Send} />
          <Route exact path='/transaction' component={Transaction} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
