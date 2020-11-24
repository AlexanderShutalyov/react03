import React from 'react';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log(this.props.match.params.id);
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