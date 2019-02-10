import React, { Component } from 'react';
import './App.css';

import {
	/*CSIntervalChanger,*/
	CSCalendar,
	CSClock,
	CSColorPicker,
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
				<h2>Pickers</h2>
				<h3>RGB</h3>
				<CSColorPicker/>
				<h3>HSL</h3>
				<CSColorPicker initialColor={{H: 0,S: 0, L: 50}}/>
			</div>
		);
	}
}

export default App;
