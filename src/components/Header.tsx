import type { Component } from 'solid-js';

import '../assets/css/header.css';
// import header from './assets/css/header.css'

const Header: Component = () => {
    return (
        <header id = "header">
            <h1>Car price prediction</h1>
        </header>
    );

};

export default Header;
