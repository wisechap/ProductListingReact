import React from 'react';


class Prod extends React.Component{
    btnClickHandler = () =>{
        
        //const product = this.props;
        //console.log(product);
        //this.product.splice( this.props.id, 1 );
        //this.product.setState( { persons: this.props.prod } );
    }
    render(){
        
        //console.log("From Prod:" + this.props.click);
        return(
            <div>
                 Name: {this.props.prod.ProductName} | Price: {this.props.prod.Price} | Memory: {this.props.prod.Memory} - 
                 <button onClick={this.props.click}>Delete</button>
            </div>
        )
    }
}


export default Prod ;