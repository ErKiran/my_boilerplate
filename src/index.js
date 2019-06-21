import React from "react";
import ReactDOM from "react-dom";
require('./index.css')
import store from './store'

const App = () => {
    return (
        <div>
            Hello React,Webpack 4 & Babel 7 new!
            <img src="./images/apple_GettyImages186843005_cmyk.jpg" alt="" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));