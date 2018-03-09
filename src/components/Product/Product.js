import React from 'react';
import Prod from './Prod';
import classes from './Product.css';

export default class Product extends React.Component{
    removeProduct = (event) =>{
        console.log(event);
    }
    render(){
        console.log(this.props);
        return(
                    <div className={classes.DivProd}>
                        {
                            this.props.product.map((prod) => {
                                return <Prod prod = {prod} key={prod.id} click ={this.removeProduct}/>
                            })   
                        }
                    </div> 
        )}
}