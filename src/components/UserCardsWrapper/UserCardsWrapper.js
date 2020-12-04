import React, { Component, useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import Popup from "../Popup/Popup";

const UserCardsWrapper = () => {
    const [userData, setUserData] = useState([]);
    const [showPopup, setshowPopup] = useState(false);
    const [name, setName] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    const removeElement = (id)=> {
        setUserData(prevState => {
            return prevState.filter((value) => value.id !== id);
        });
    };

    const addElement = (event)=> {
        console.log(event)
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
        event.target.name === 'name' && setName(event.target.value);
        event.target.name === 'username' && setusername(event.target.value);
        event.target.name === 'email' && setemail(event.target.value);
        event.target.name === 'phone' && setphone(event.target.value);
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
        phone: phone
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
};

export default UserCardsWrapper;


