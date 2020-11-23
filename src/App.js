import logo from './logo.svg';
import './App.css';
import UserCardsWrapper from "./components/UserCardsWrapper/UserCardsWrapper";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {

  return (
      <React.Fragment>

        <UserCardsWrapper />

      <Router>
        <div>
          <Switch>
              <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
      </Router>
      </React.Fragment>
  );
}

function Child() {
  let { id } = useParams();

  return (
      <React.Fragment>
              <div>
                  <h3>ID: {id}</h3>
              </div>
      </React.Fragment>
  );
}

export default App;
