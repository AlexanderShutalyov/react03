import React, { Component, useState, useEffect } from 'react';
import UserPost from "../UserPost/UserPost";
import  './UserPage.css';
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useParams
} from "react-router-dom";

const UserPage = () => {
    let { id } = useParams();
    const [currentUser, setCurrentUser] = useState({});
    const [currentPosts, setPostsUser] = useState([]);

    useEffect(() => {
        let current;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                setCurrentUser(response[id]);
                current = response[id]
            })
            .catch((error) => console.log(error))

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => {
                let posts = [];
                response.forEach((e) => {
                    if (e.userId === current.id) {
                        posts.push(e);
                    }
                });
                setPostsUser( posts )
            })
    }, []);

     return (
            <React.Fragment>
                <div className="user_data">
                    <p>user = {id}</p>
                    <p>name = {currentUser ? currentUser.name : ''}</p>
                </div>
                <div className="user_posts">
                    {currentPosts && currentPosts.map((props, index) => (
                        <UserPost key={index} {... props} />
                    ))}
                </div>
            </React.Fragment>
        );


};
export default UserPage;




// export default UserPage1;

// class UserPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.props = props;
//     }
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((response) => this.setState({ currentUser: response[this.props.match.params.id] }))
//             .then(() => console.log('Loaded'));
//
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((response) => {
//                 let posts = [];
//                 response.forEach((e) => {
//                     if(e.userId === this.state.currentUser.id) {
//                         posts.push(e);
//                     }
//                 });
//                 this.setState({ userPosts: posts })
//             })
//             .then(() => console.log('Loaded'))
//
//     }
//
//     render() {
// //        let {id} = useParams();
//         return (
//             <React.Fragment>
//                 <div className="user_data">
//                     <p>user = {this.props.match.params.id}</p>
//                     <p>name = {this.state && this.state.currentUser ? this.state.currentUser.name : ''}</p>
//                 </div>
//                 <div className="user_posts">
//                     {this.state && this.state.userPosts && this.state.userPosts.map((props, index) => (
//                         <UserPost key={index} {... props} />
//                     ))}
//
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
//
// export default UserPage;



