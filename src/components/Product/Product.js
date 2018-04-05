import React from 'react';
import Prod from './Prod';
import  './Product.css';

export default class Product extends React.Component{
    removeProduct = (i) =>{
        //console.log({i});
        this.props.click(i);
    }
    render(){
        //console.log(this.props.click);
        return(
                    <div className="DivProd">
                        {
                            this.props.product.map((prod) => {
                                //console.log({prod})
                                return (
                                    <table width="85%" border="1">                                   
                                        <Prod prod = {prod} key={prod.id} click={() => this.removeProduct(prod.id)}/>
                                    </table>
                                )
                            })   
                        }
                    </div> 
        )}
}