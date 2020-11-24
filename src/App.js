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
                        {/*<Route path="/user/:id" children={<Child/>}/>*/}
                        <Route path="/user/:id" children={props => <UserPage {...props}/>}/>
                        {/*<Route path="/user/:id" children={<UserPage {...props}/>}/>*/}
                        <Route exact path="/">
                            <UserCardsWrapper/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

// function Child() {
//     let {id} = useParams();
//
//     return (
//         <React.Fragment>
//             <div>
//                 <h3>ID: {id}</h3>
//             </div>
//         </React.Fragment>
//     );
// }

export default App;
