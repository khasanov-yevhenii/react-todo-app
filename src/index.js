import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import './assets/styles/index.scss';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
