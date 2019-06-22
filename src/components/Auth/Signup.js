import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authactions'

require('../../css/signup.css')

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.password !== this.state.password2) {
            console.log('Password are unequal')
        }
        else {
            console.log(user)
            this.props.registerUser(user, this.props.history)
        }
    }

    render() {
        return (
            <div className="cover">
                <div className="signupbox">
                    <img src="https://image.flaticon.com/icons/svg/1542/1542168.svg" className="avatar" />
                    <h1>Signup</h1>
                    <form onSubmit={this.onSubmit}>
                        <p>Username</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Username"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
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
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm Your Password"
                            value={this.state.password2}
                            onChange={this.onChange}
                        />
                        <input type="submit" name="" value="Signup" />
                        <Link to="/reset_password">Lost your password?</Link><br />
                        <Link to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
