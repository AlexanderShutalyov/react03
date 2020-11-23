import React from 'react';
import UserCard from '../UserCard/UserCard';
import Popup from "../Popup/Popup";

class UserCardsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            currentPage: 'wrapper',
            userData: [],
            showPopup: false,
            name: '',
            username: '',
            email: '',
            phone: ''
        };

        this.addElement = this.addElement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    removeElement(index) {
        let users = this.state.userData;
        users.splice(index, 1);
        this.setState({userData: users})
    }

    addElement(event) {
        event.preventDefault();
        let users = this.state.userData;
        users.push({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone
        });
        this.setState({
            userData: users,
            showPopup: false,
            name: '',
            username: '',
            email: '',
            phone: ''
        })
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    reverseShowPopup = () => this.setState({showPopup: !this.showPopup});

    // setUserData(user) {
    //     if (user) {
    //         this.setState({ data: user })
    //     }
    // }
    componentDidMount() {
        // const { isLoading } = this.state;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            // .then(this.setUserData)
            .then((response) => this.setState({ userData: response }))
            // .then(() => this.setState({ isLoading: !isLoading }))
            .then(() => console.log('Loaded'))
    }

    render() {
        const { userData } = this.state;
        const { showPopup } = this.state;
        return(
            <React.Fragment>
                <div>
                <button onClick={ this.reverseShowPopup }>Add new user</button>
                    { showPopup && <Popup {...this.state} addElement={this.addElement} handleInputChange={this.handleInputChange}/>}
                </div>
                { userData.map((props, index) => (
                    <UserCard {...props} key={index} removeElement={this.removeElement} currentIndex={index} />
                ))}
            </React.Fragment>
        )
    }
}

export default UserCardsWrapper;

// { showPopup && <Popup {...this.state} addElement={this.addElement} handleInputChange={this.handleInputChange}/>}



