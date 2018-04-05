import React from 'react';
import '../Users/user.css';

class User extends React.Component{
    render(){
        return(
            <div className="rowDiv">
                <div className="cellDiv">{this.props.user.name}</div>
                <div className="cellDiv">{this.props.user.email}</div>
            </div>
        )
    }
}

//<b className="b">Name: </b>{this.props.user.name}<b  className="separator"> | </b><b  className="b"> Email: </b>{this.props.user.email}

export default User ;