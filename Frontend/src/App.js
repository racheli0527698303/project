import './App.css';
import { React } from "react";
import Employers from "../src/components/employed";
import Login from "../src/components/login";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/employers">
              <Employers />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
