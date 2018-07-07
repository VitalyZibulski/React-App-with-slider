import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid'; //object with class Container, if use {}, all components in lib, in our case -only part

import styled from 'styled-components';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <Main/>
      </div>
    );
  }
}


export default App;
