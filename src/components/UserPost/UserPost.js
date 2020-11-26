import React from 'react';
// import './UserCard.css';

const UserPost = ({ body, title }) => {
    // const cardClass = 'Card';

    return (
        <div>
        {/*<div className={cardClass}>*/}
            <p>Title: { title }</p>
            <p>Body: { body }</p>
        </div>
    )
};

export default UserPost;