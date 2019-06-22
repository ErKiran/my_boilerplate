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
                        <Link to="/login">
                            <button className="login">
                                Login
                            </button>
                        </Link>
                        <span className="some-border"></span>
                        <Link to="/signup">
                            <button className="signup">
                                SignUp
                            </button>
                        </Link>
                    </div>
                </header>
                <footer className="center bg-dark">
                    <p>Book Store &copy; 2019</p>
                </footer>
            </div >
        );
    }
}

export default Landingpage;