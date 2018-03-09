import React from 'react';
import User from './User';


class Users extends React.Component{
    render(){
        //console.log(this.props);
        return (
            <ul>
            {
                this.props.users.map((user) => {
                    return <User user = {user} key={user.id}/>
                })   
            }
            </ul> 
        )
    }
 }



export default Users;