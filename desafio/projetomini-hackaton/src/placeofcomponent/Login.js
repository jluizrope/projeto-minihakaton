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
        this.props.createAccount(this.state.name, this.state.email, this.state.password)        
    }
    else{
        this.setState({message:'wrongcode'})
    }
}

changeName = (event) => {
    this.setState({
        name: event.target.value,
    })
}

changeEmail = (event) => {
    this.setState({
        email: event.target.value,
    })
}

changePassword1 = (event) => {
    this.setState({
        password1: event.target.value
    })
}

changePassword2 = (event) => {
    this.setState({
        password2: event.target.value
    })
}

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>EMAIL</p>
                    <input required autoFocus type='email' onchange={this.changeEmail}
                    placeholder='name@email.com'/>
                </label>
                <label>
                    <p>CODE</p>
                    <input required type='password' placeholder='#@ 123 abc !' onchange={this.changePassword}/>
                </label>
                <button onClick={()=> this.props.Timer}>Enter</button>
                <p>{this.state.message}</p>
            </form>
            <button onClick={()=> this.props.createAccount()}>CREATE AN ACCOUNT</button>     
        </div>
        )
    }
}

export default Login;