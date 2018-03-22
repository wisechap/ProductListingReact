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
                 <b className="b"> Name:</b> {this.props.prod.ProductName}<b className="separator"> | </b>
                 <b className="b"> Price:</b> {this.props.prod.Price} <b className="separator">| </b> 
                 <b className="b"> Memory:</b> {this.props.prod.Memory} <b className="s"> . </b>
                 <button onClick={this.props.click}>Delete</button>
            </div>
        )
    }
}


export default Prod ;