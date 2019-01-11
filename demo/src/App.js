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
					{['Error', 'Loading', 'Success', 'Message', 'On', 'Off', 'Settings', 'Warning'].map(symbol => <span key={symbol}>{CSSymbols[symbol]}</span>)}
				</div>
			</div>
		);
	}
}

export default App;
