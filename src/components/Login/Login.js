import React from 'react';
import classes from './Login.css' ;

const login = () => {
    return (
            <div className="divPadding">
                <h1>Login into Application</h1>
                <form className="formPadding">
                <label className="labelStyle">User Name</label>
                <input type="text" className="inputStyle"/>
                <br/>
                <label className="labelStyle">Password</label>
                <input type="Password" className="inputStyle"/>
                <br/>
                <hr width="100%"/>
                <button >Submit</button>
                <button onClick={this.clearClickHandler}>Clear</button>
                </form>
            </div> 
    )
};

export default login;