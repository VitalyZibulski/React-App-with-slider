import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Hello(){
	let phrase = "World"
	return(
		<h1>Hello {phrase}!</h1>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
