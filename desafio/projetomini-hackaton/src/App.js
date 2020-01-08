import React, { Component } from 'react';
import './App.css';

import Conta from './placeofcomponent/Conta';
import Login from './placeofcomponent/Login';
import Timer from './placeofcomponent/Timer';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      showScreen: 'Login'
    }

  }
  handleLogin = () => {
    this.setState ({      
    })
  }
  renderScreen = () => {
    switch(this.state.showScreen){
      case "Conta":
        return <Conta></Conta>;
      case "Timer":
        return <Timer></Timer>;      
      case "Login":
      default:
        return <Login></Login>;
        }
  }

  render() {
    return (
      <div className="App">
        {/* <Login></Login> */}
     {this.state.showScreen}
      </div>
    );
  }
}
export default App;
