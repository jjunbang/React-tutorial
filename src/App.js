import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birth' : '910222',
  'gender' : 'men',
  'job' : '개발자'
}

class App extends Component {
  render(){
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birth={customer.birth}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
