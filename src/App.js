import logo from './logo.svg';
import './App.css';
import UserCardsWrapper from "./components/UserCardsWrapper/UserCardsWrapper";
import UserPage from "./components/UserPage/UserPage";
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
            <Router>
                <div>
                    <Switch>
                        <Route path="/user/:id" children={props => <UserPage {...props}/>}/>
                        <Route exact path="/">
                            <UserCardsWrapper/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
