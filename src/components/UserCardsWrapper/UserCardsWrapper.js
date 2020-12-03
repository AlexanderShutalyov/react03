import React, { Component, useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import Popup from "../Popup/Popup";
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useParams
} from "react-router-dom";

const UserCardsWrapper = () => {
    const [userData, setUserData] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [name, setName] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    const removeElement = (index)=> {
        let users = userData;
        users.splice(index, 1);
        setUserData(users);
        console.log(userData)
    };

    const addElement = (event)=> {
        event.preventDefault();
        let users = userData;
        users.push({
            name: name,
            username: username,
            email: email,
            phone: phone
        });
        setUserData(users);
        setshowPopup(false);
        setName('');
        setusername('');
        setemail(email);
        setphone(phone);
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        // TODO
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
    };

    const reverseShowPopup = () =>setshowPopup(!showPopup);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) =>  setUserData(response))
            .then(() => console.log('Loaded'))
    }, []);
    
    let state = {
        userData: userData,
        showPopup: showPopup,
        name: name,
        username: username,
        email: email,
        phone: email
    };

    return(
        <React.Fragment>
            <div>
                <button onClick={ reverseShowPopup }>Add new user</button>
                { showPopup && <Popup {...state} addElement={addElement} handleInputChange={handleInputChange}/>}
            </div>
            { userData.map((props, index) => (
                <UserCard {...props} key={index} removeElement={removeElement} currentIndex={index} />
            ))}
        </React.Fragment>
    )


    // return(
    //     <React.Fragment>
    //         <div>
    //             <button onClick={ reverseShowPopup }>Add new user</button>
    //             { showPopup && <Popup {...state} addElement={addElement} handleInputChange={handleInputChange}/>}
    //         </div>
    //         { userData.map((props, index) => (
    //             <UserCard {...props} key={index} removeElement={removeElement} currentIndex={index} />
    //         ))}
    //     </React.Fragment>
    // )




};

// class UserCardsWrapper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.props = props;
//
//         this.state = {
//             userData: [],
//             showPopup: false,
//             name: '',
//             username: '',
//             email: '',
//             phone: ''
//         };
//
//         this.addElement = this.addElement.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.removeElement = this.removeElement.bind(this);
//     }
//
//     ///////
//     removeElement(index) {
//         let users = this.state.userData;
//         users.splice(index, 1);
//         this.setState({userData: users})
//     }
//
//     ///////
//     addElement(event) {
//         event.preventDefault();
//         let users = this.state.userData;
//         users.push({
//             name: this.state.name,
//             username: this.state.username,
//             email: this.state.email,
//             phone: this.state.phone
//         });
//         this.setState({
//             userData: users,
//             showPopup: false,
//             name: '',
//             username: '',
//             email: '',
//             phone: ''
//         })
//     }
//     //////
//     handleInputChange(event) {
//         event.preventDefault();
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }
//
//     ////////
//     reverseShowPopup = () => this.setState({showPopup: !this.showPopup});
//
//     componentDidMount() {
//         // const { isLoading } = this.state;
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             // .then(this.setUserData)
//             .then((response) => this.setState({ userData: response }))
//             // .then(() => this.setState({ isLoading: !isLoading }))
//             .then(() => console.log('Loaded'))
//     }
//
//     render() {
//         const { userData } = this.state;
//         const { showPopup } = this.state;
//         return(
//             <React.Fragment>
//                 <div>
//                 <button onClick={ this.reverseShowPopup }>Add new user</button>
//                     { showPopup && <Popup {...this.state} addElement={this.addElement} handleInputChange={this.handleInputChange}/>}
//                 </div>
//                 { userData.map((props, index) => (
//                     <UserCard {...props} key={index} removeElement={this.removeElement} currentIndex={index} />
//                 ))}
//             </React.Fragment>
//         )
//     }
// }

export default UserCardsWrapper;


