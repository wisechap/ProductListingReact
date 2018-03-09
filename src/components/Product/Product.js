import React from 'react';
import Prod from './Prod';
import classes from './Product.css';

export default class Product extends React.Component{
    removeProduct = (i) =>{
        console.log({i});
    }
    render(){
        console.log(this.props.click);
        return(
                    <div className="DivProd">
                        {
                            this.props.product.map((prod) => {
                                return <Prod prod = {prod} key={prod.id} click={() => this.removeProduct(prod.id)}/>
                            })   
                        }
                    </div> 
        )}
}