import React, { Component } from 'react';
import axios from 'axios';
require('../../css/ResetPassword.css');

class ResetPassword extends Component {
    componentDidMount() {
        const test = axios.get('/api/login');
        console.log(test)
    }

    render() {
        return (
            <div className="reset">
                <form>
                    <input type="email" name="email" id="" placeholder="Enter your Email" /><br />
                    <p>Enter E-mail To reset Passport</p>
                </form>
            </div>
        );
    }
}

export default ResetPassword;