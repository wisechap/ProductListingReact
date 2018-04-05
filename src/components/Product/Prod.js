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
            <tr>
                 <td className="b"> Name: {this.props.prod.ProductName}</td>
                 <td className="b"> Price: {this.props.prod.Price}</td> 
                 <td className="b"> Memory: {this.props.prod.Memory} </td>
                 <td> <button onClick={this.props.click}>Delete</button> </td>
            </tr>
        )
    }
}


export default Prod ;