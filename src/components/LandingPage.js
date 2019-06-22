import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('../css/Landingpage.css')

class Landingpage extends Component {
    render() {
        return (
            <div>
                <header className="showcase">
                    <div className="content">
                        <img src="http://i64.tinypic.com/2vazj8g.png" className="logo" alt="Bookify" />
                        <div className="title">
                            Welcome To Bookify
                    </div>
                        <button className="login">
                            <Link to="/login" />
                            Login
                        </button>
                        <span className="some-border"></span>
                        <button className="signup">
                            <Link to="/signup" />
                            SignUp
                            </button>
                    </div>

                </header>
                <footer className="center bg-dark">
                    <p>Book Store &copy; 2019</p>
                </footer>
            </div>
        );
    }
}

export default Landingpage;