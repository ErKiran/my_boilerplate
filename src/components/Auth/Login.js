import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/login.css';

class Login extends Component {
    render() {
        return (
            <div className="cover">
                <div className="loginbox">
                    <img src="http://i64.tinypic.com/2zzmerl.png" className="avatar" />
                    <h1>Login</h1>
                    <form>
                        <p>Username</p>
                        <input type="text" name="" placeholder="Enter Username" />
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <input type="submit" name="" value="Login" />
                        <Link to="/reset_password"> Lost your password?</Link><br />
                        <Link to="/signup"> Don't have an account?</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;