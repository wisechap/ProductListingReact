import React from 'react';
import '../Users/user.css';

class User extends React.Component{
    render(){
        return(
            <li>
                 <b className="b">Name: </b>{this.props.user.name}<b  className="separator"> | </b><b  className="b"> Email: </b>{this.props.user.email}
            </li>
        )
    }
}


export default User ;