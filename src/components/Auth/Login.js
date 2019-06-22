import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authactions'
import '../../css/login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(login)
        this.props.loginUser(login);
    }
    render() {
        return (
            <div className="cover">
                <div className="loginbox">
                    <img src="http://i64.tinypic.com/2zzmerl.png" className="avatar" />
                    <h1>Login</h1>
                    <form onSubmit={this.onSubmit}>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <input type="submit" name="" value="Login" />
                        <Link to="/reset_password"> Lost your password?</Link><br />
                        <Link to="/signup"> Don't have an account?</Link>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
