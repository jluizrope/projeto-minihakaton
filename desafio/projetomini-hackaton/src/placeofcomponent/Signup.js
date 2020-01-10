import React from 'react';

class Signup extends React.Component{
render() {
    return(
    <div>
        <h1>NAME:</h1>
        <imput className='Name' type='Text'></imput>
        <h1>EMAIL:</h1>
        <imput className='E-mail' type='Text'></imput>
        <h1>TELEPHONE No.:</h1>
        <imput className='Telephone' type='Number'></imput>
        <h1>AGE:</h1>
        <imput className='Age' type='Number'></imput>
        <h1>ADDRESS:</h1>
        <imput className='Address' type='Text'></imput>
        <h1>JOB</h1>
        <imput className='Job' type='Text'></imput> 
        <label>
            <p>CODE VALIDATION</p>
                <input required type='password' placeholder='#@ 123 abc !'/>
        </label>       
    </div>
    )        
}
}

export default Signup;