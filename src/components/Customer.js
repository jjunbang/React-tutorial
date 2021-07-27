import React from 'react';

class Customer extends React.Component{
    render(){
        return(
        <div>
            <p>{this.props.id}</p>
            <p>{this.props.image}</p>
            <h2>{this.props.name}</h2>
            <p>{this.props.birth}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        );     
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            
        )
    }
}

export default Customer;
