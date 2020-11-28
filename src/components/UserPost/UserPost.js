import React from 'react';
import './UserPost.css';

const UserPost = ({ body, title }) => {
    // const cardClass = 'Card';

    return (
        <div className='user_post'>
        {/*<div className={cardClass}>*/}
            <p className="post_title">Title: { title }</p>
            <p className="post_body">Body: { body }</p>
        </div>
    )
};

export default UserPost;