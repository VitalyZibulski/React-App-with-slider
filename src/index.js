import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Hello(){
	let phrase = "World"
	return (
		<h1>Hello {4+8}!</h1>
	)
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

const element = <SayFullName name="Antony" surname="Antony1" link="gmail.com" />

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
