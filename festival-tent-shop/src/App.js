import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ProductList />
            </div>
        );
    }
}

export default App;
