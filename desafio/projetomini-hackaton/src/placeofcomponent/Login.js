import React from 'react';
import '../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // currentScreen: 'login',
            user: {
              email: '',
              password1: '',
              password2: '',
              message: ''
            }
        } 
    }

handleSubmit = (ev) => {
    ev.preventDefault();

    if(this.state.password1 === this.state.password2){
        this.setState({message:'right code'})
    }
    else{
        this.setState({message:'wrongcode'})
    }
}

changeEmail = (event) => {
    this.setState({
        email: event.target.value,
    })
}

changePassword1 = (ev) => {
    this.setState({
        password1: ev.target.value
    })
}

changePassword2 = (ev) => {
    this.setState({
        password2: ev.target.value
    })
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Email</p>
                    <input required autoFocus type='email' onchange={this.changeEmail}
                    placeholder='name@email.com'/>
            </label>
            <label>
                <p>Code</p>
                <input required type='password' placeholder='#@ 123 abc !' onchange={this.changePassword}/>
            </label>
            <label>
                <p>Code validation</p>
                <input value={this.state.password2} required type='password'
                placeholder='#@ 123 abc !' onchange={this.changePassword2}/>
            </label> 
            <button>Enter</button>
            <p>{this.state.message}</p>
        </form>
        )
    }
}

export default Login;