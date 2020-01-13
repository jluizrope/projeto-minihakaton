import React from 'react';
import '../App.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password01: '',
            password02: '',
            error: '',
            createSuccess: false,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.password === this.state.password02) {
            this.props.createAccount(this.state.name, this.state.email, this.state.password);
            this.setState({
                createSuccess: true,
                error: '',
            });            
        } else {
            this.setState({error:'wrong password'});
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

    changePassword01 = (event) => {
        this.setState({
            password01: event.target.value,
        })
    }

    changePassword02 = (event) => {
        this.setState({
            password02: event.target.value,
        })
    }
    
    renderModal = () => (
        <div onClick={() => this.setState({ createSuccess: false })}>
            <div>
                <p>YOU GOT IT !!!</p>
                <button onClick={() => this.PaymentResponse.clickCreateanaccount('login')}>Enter login</button>
            </div>
        </div>
    )
    render() {
        return (
            <form>                
                <label>
                    <h1>NAME:</h1>
                    <input className='Name' type='Text' />
                </label>
                <label>
                    <h1>EMAIL:</h1>
                    <input className='E-mail' type='Text' />
                </label>
                <label>
                    <h1>TELEPHONE No.:</h1>
                    <input className='Telephone' type='Number' />
                </label>
                <label>
                    <h1>AGE:</h1>
                    <input className='Age' type='Number' />
                </label>
                <label>
                    <h1>ADDRESS:</h1>
                    <input className='Address' type='Text' />
                </label>
                <label>
                    <h1>JOB</h1>
                    <input className='Job' type='Text' />
                </label>
                <label>
                    <p>CREATE A PASSWORD</p>
                    <input required type='password' placeholder='#@ 123 abc !' />
                </label>
                <label>
                    <p>VALIDATE YOUR PASSWORD</p>
                    <input required type='password' placeholder='#@ 123 abc !' />
                </label>
                <button>Enter</button>                
            </form>
        )
    }


}

export default Signup;
