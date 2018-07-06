import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Antony" surname="Antony1" link="gmail.com" />
        <SayFullName name="Ron" surname="Ron1" link="mail.com" />
      </div>
    );
  }
}

function SayFullName(props){
  return (
    //if not use <div> we have browser mistake
    //props Object with attributes, props only for reading
    <div>
      <h1>name - {props.name}, surname- {props.surname}</h1>
      <a href={props.link}> My profile</a>
    </div>
  )
}

export default App;
