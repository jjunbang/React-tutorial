import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birth' : '910222',
  'gender' : '남자',
  'job' : '개발자'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '뚤기',
  'birth' : '911214',
  'gender' : '여자',
  'job' : '기얌둥이'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '부에용',
  'birth' : '900102',
  'gender' : '남자',
  'job' : '배우'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return(<Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
              )  
          })
        }
      </div>
    );
  }
}

export default App;
