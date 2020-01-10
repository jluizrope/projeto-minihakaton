import React, { Component } from 'react';
import './App.css';

import Signup from './placeofcomponent/Signup';
import Login from './placeofcomponent/Login';
import Timer from './placeofcomponent/Timer';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      showScreen: 'Login',
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  createAccount = (name, email, password) => {
    this.setState({
      user: {
        name: name,
        email: email,
        password: password,
      },
      showScreen: 'Signup',
    });
  }

  matchEvents= (email, password) => {
    console.log(email === this.state.user.email)
    console.log(password === this.state.user.password)
  }
 
  renderScreen = () => {
    switch(this.state.showScreen){
      case "Signup":
        return <Signup></Signup>;
      case "Timer":
        return <Timer></Timer>;      
      case "Login":
      default:
        return <Login createAccount = {()=>this.createAccount()} Login = {()=>this.matchEvents()}/>;
        }
  }

  render() {
    return (
      <div className="App">
        {/* <Login></Login> */}
     {this.renderScreen()}
      </div>
    );
  }
}
export default App;
