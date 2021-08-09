import React, { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead ,TableBody, TableRow, TableCell, Paper, withStyles} from '@material-ui/core';
 

import './App.css';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop : theme.spacing.unit * 3 ,
    overflowX : "auto"
  },
  table:{
    minWidth: 1080
  }
})


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
    const{ classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => {
              return(
                <Customer
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
          </TableBody>
        </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles) (App);
