import React, { Component } from 'react';
import './App.css';

import {
	/*CSIntervalChanger,*/
	CSSymbols
} from 'chillisalmon';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className='Symbols'>
					<h1>Old</h1>
					{['Message', 'On', 'Off', 'Settings'].map(symbol => <span key={symbol} className='Symbol'>{CSSymbols[symbol]}</span>)}
					<h1>New</h1>
					{['Error', 'Loading', 'Success', 'Warning'].map(symbol => <span key={symbol}  className='Symbol'>{CSSymbols[symbol]}</span>)}
				</div>
			</div>
		);
	}
}

export default App;
