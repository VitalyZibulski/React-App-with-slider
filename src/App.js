import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid'; //object with class Container, if use {}, all components in lib, in our case -only part

import styled from 'styled-components';

import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/Menu'

const HeaderWrapper = styled.header`
  width:100%;
  height:49px;
  background-color: #242424;
  opacity: 0.8;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Grid>
            <Header/>
          </Grid>
          </HeaderWrapper>
          <Menu/>
        <Main/>
      </div>
    );
  }
}


export default App;
