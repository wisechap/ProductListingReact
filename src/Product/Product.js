import React from 'react';
import './Product.css' ;

const product = (props) => {
    return(
        <div>
            <p> I'm a {props.name} amd I am {props.age} years of age</p>
            <input type="text" onChange={props.change}/>
        </div>
    ) 

};

export default product;