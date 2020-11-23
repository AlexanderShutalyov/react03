import React from 'react';
import './UserCard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const UserCard = ({ id, name, username, email, address, company, phone, website, removeElement, currentIndex }) => {
    const cardClass = 'Card';

    return (
       <div className={cardClass}>
            <p> className="Card_subTitle">My id is: { id }</p>
            <p>Name: { name }</p>
            <p>UserName: { username }</p>
            <p>Email: { email }</p>
            <p>Phone: { phone }</p>
            <p>Website: { website }</p>
           <div>
               <p>Street: { (address && address.street) || '-'} </p>
               <p>Suite: { (address && address.suite) || '-'} </p>
               <p>City: { (address && address.city) || '-'} </p>
               <p>Zipcode: { (address && address.zipcode) || '-'} </p>
           </div>
           <div>
               <p>Name: { (company && company.name) || '-'} </p>
               <p>CatchPhrase: { (company && company.catchPhrase) || '-'} </p>
               <p>BS: { (company && company.bs) || '-'} </p>
           </div>
           <div>
               <Link to={'/'+id}>
                   <button type="button" className="btn btn-info">Button</button>
               </Link>
           </div>
           {/*<button onClick={() => <Link to="/"id>Netflix</Link>}>Show user</button>*/}
            <button onClick={() => removeElement(currentIndex)}>Remove User</button>
        </div>
    )
};

export default UserCard;