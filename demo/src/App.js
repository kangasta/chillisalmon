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
					{['Error', 'Loading', 'Message', 'Off', 'On', 'Settings', 'Success', 'Warning'].map(symbol => <span key={symbol}  className='Symbol'>{CSSymbols[symbol]}</span>)}
				</div>
			</div>
		);
	}
}

export default App;
