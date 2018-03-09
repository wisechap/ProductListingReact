import React from 'react';

class User extends React.Component{
    render(){
        return(
            <li>
                 Name: {this.props.user.name} | Email: {this.props.user.email}
            </li>
        )
    }
}

export default User ;