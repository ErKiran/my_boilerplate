import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component {
    render() {
        return (
            <div class="loginbox">
                <img src="http://i64.tinypic.com/2zzmerl.png" class="avatar" />
                <h1>Login</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter Username" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password" />
                    <input type="submit" name="" value="Login" />
                    <a href="#">Lost your password?</a><br />
                    <a href="#">Don't have an account?</a>
                </form>
            </div>
        );
    }
}

export default Login;