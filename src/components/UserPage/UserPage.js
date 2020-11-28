import React from 'react';
import UserPost from "../UserPost/UserPost";
import  './UserPage.css';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import UserCard from "../UserCard/UserCard";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => this.setState({ currentUser: response[this.props.match.params.id] }))
            .then(() => console.log('Loaded'));

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => {
                let posts = [];
                response.forEach((e) => {
                    if(e.userId === this.state.currentUser.id) {
                      posts.push(e);
                    }
                });
                this.setState({ userPosts: posts })
            })
            .then(() => console.log('Loaded'))

    }

    render() {
        // console.log(this.state);
//        let {id} = useParams();
        return (
            <React.Fragment>
                <div className="user_data">
                    <p>user = {this.props.match.params.id}</p>
                    <p>name = {this.state && this.state.currentUser ? this.state.currentUser.name : ''}</p>
                </div>
                <div className="user_posts">
                    {this.state && this.state.userPosts && this.state.userPosts.map((props, index) => (
                        <UserPost key={index} {... props} />
                    ))}

                </div>
            </React.Fragment>
        );
    }
}

export default UserPage;