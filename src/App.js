
import './App.css';
import React, {Component} from 'react'
import Customer from './Components/Customer'

const customer={
  "name":"홍길동"
}


class App extends Component{
render() {
    return(
      <Customer
      name={customer.name}
      />
    );
  }
}
 

export default App;
