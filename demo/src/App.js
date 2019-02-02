import React, { Component } from 'react';
import './App.css';

import {
	/*CSIntervalChanger,*/
	CSCalendar,
	CSClock,
	CSExpandable,
	CSSymbols
} from 'chillisalmon';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h2>Symbols</h2>
				<div className='Symbols'>
					{['Error', 'Expandable', 'Loading', 'Message', 'Off', 'On', 'Settings', 'Success', 'Warning'].map(symbol => <span key={symbol}  className='Symbol'>{CSSymbols[symbol]}</span>)}
				</div>
				<h2>Expandable</h2>
				<CSExpandable>Content</CSExpandable>
				<h2>Time</h2>
				<div className='Clock'>
					<CSClock/>
				</div>
				<CSCalendar/>
			</div>
		);
	}
}

export default App;
