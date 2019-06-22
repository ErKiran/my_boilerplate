import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('../../css/signup.css')

class Signup extends Component {
    render() {
        return (
            <div>
                <div class="signupbox">
                    <img src="https://image.flaticon.com/icons/svg/1542/1542168.svg" class="avatar" />
                    <h1>Signup</h1>
                    <form>
                        <p>Username</p>
                        <input type="text" name="" placeholder="Enter Username" />
                        <p>Email</p>
                        <input type="email" name="" placeholder="Enter Email" />
                        <p>Password</p>
                        <input type="password" name="" placeholder="Enter Password" />
                        <input type="submit" name="" value="Signup" />
                        <a href="#">Lost your password?</a><br />
                        <a href="#">Already have an account?</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;