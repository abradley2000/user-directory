import React, {Component} from 'react';
import './App.css';
import data from './data';
import Person from './Components/Person'

class App extends Component {
  constructor() {
    super()
    this.state = {
      i: 0,
    }
    this.addi = this.addi.bind(this)
    this.subi = this.subi.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }
  addi() {
    if (this.state.i === data.length - 1) return
    this.setState({
      i: this.state.i + 1
    })
  }
  subi() {
    if (this.state.i === 0) return
    this.setState({
      i: this.state.i - 1
    })
  }
  deleteUser() {
    data.splice(this.state.i, 1)
    if (this.state.i > data.length - 1) {
      this.setState({
        i: this.state.i - 1
      })
    } 
    else {
    this.setState({
      i: this.state.i
    })
    }
  }
  render() {
    return (
      <div>
        <Person 
        id={data[this.state.i]} 
        addi={this.addi} 
        subi={this.subi}
        deleteUser={this.deleteUser} 
        i={this.state.i}/>
      </div>
    );
  }
}

export default App;