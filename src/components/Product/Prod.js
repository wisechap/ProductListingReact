import React from 'react';


class Prod extends React.Component{
    btnClickHandler = () =>{
        
        //const product = this.props;
        //console.log(product);
        //this.product.splice( this.props.id, 1 );
        //this.product.setState( { persons: this.props.prod } );
    }
    render(){
        
        console.log("From Prod:" + this.props.click);
        return(
            <p  OnClick={this.props.click}>
                Name: {this.props.prod.ProductName} | Price: {this.props.prod.Price} | Memory: {this.props.prod.Memory}
            </p>
        )
    }
}


export default Prod ;