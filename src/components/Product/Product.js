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
                    <table width="100%" border="1" bordercolor="#CCCFFF" cellSpacing="0"> 
                        {
                            this.props.product.map((prod) => {
                                //console.log({prod})
                                return (
                                                                      
                                        <Prod prod = {prod} key={prod.id} click={() => this.removeProduct(prod.id)}/>
                                    
                                )
                            })   
                        }
                        </table>
                    </div> 
        )}
}