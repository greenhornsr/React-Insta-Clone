import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        
    }

    handleChanges = event => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,      
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state.username);

    } 
    render(){
        return (
            <section>
                <form onSubmit={this.handleLogin}>
                    <h1>Welcome to Login Page {this.props.user}</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChanges} />
                    <label htmlFor="password">Password</label>
                    <input type="text" value={this.state.password} name="password" onChange={this.handleChanges} />
                    <button>Login</button>
                </form>
            </section>
        )
    }
}

export default Login