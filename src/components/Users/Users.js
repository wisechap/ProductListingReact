import React from 'react';
import User from './User';


class Users extends React.Component{
    render(){
        //console.log(this.props);
        return (
            <div className="containerDiv">
                <div className="rowDivHeader">
                    <div className="cellDivHeader">USER NAME</div>
                    <div className="cellDivHeader">EMAIL</div>
                </div>
            {
                this.props.users.map((user) => {
                    return (
                        
                            <User user = {user} key={user.id}/>
                        
                    )                   
                })   
            }
            </div>
        )
    }
 }



export default Users;