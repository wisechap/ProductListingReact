import React from 'react';
import './Login.css' ;

const login = () => {
    return(
        <div class="divPadding">
            <h1>Login into Application</h1>
            <form class="formPadding">
            <label class="labelStyle">User Name</label>
            <input type="text" class="inputStyle"/>
            <br/>
            <label class="labelStyle">Password</label>
            <input type="Password" class="inputStyle"/>
            <br/>
            <button> Submit</button>
            <button>Reset</button>
            </form>
        </div>
    ) 

};

export default login;