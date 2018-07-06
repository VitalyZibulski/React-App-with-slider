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
		<div>
			<h1>name - {props.name}, surname- {props.surname}</h1>
			<a href={props.link}> My profile</a>
		</div>
	)
}

ReactDOM.render(<SayFullName name="Antony" surname="Antony1" link="gmail.com" />, document.getElementById('root'));
registerServiceWorker();
