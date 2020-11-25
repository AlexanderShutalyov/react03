import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    // componentDidMount() {
    //     // const { isLoading } = this.state;
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         // .then(this.setUserData)
    //         .then((response) => this.setState({ userData: response }))
    //         // .then(() => this.setState({ isLoading: !isLoading }))
    //         .then(() => console.log('Loaded'))
    // }

    render() {
        // console.log(this.props);

        // console.log(this.props.match.params.id);
//        let {id} = useParams();
        return (
            <React.Fragment>
                <div>
                    <h1>HELLO user = {this.props.match.params.id}</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default UserPage;