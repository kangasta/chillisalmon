import React, { Component } from 'react';

import '../style/CSSymbols.css';
import '../style/CSEffects.css';

class CSSymbols extends Component {
	static get Error() {
		return (
			<svg className='cs-symbols-stroke' viewBox="0 0 100 100">
				<line x1='10' y1='10' x2='90' y2='90' strokeWidth='10'/>
				<line x1='10' y1='90' x2='90' y2='10' strokeWidth='10'/>
			</svg>
		);
	}

	static get Loading() {
		return (
			<svg className='cs-symbols-stroke cs-effect-rotate' viewBox="0 0 100 100">
				<circle
					cx='50' cy='50' r='45'
					strokeWidth='10'
					strokeLinecap='round'
					strokeDasharray='0,28.27433'
				/> {/* strokeDasharray 0,28.27433 -> 10 dots */}
			</svg>
		);
	}

	static get Message() {
		return (
			<svg className='cs-symbols-fill' viewBox="0 0 100 100">
				<rect x='0' y='0' width='100' height='70'/>
				<polygon points="0,60 0,100 40,60"/>
			</svg>
		);
	}

	static get Off() {
		return (
			<svg className='cs-symbols-stroke' viewBox="0 0 100 100">
				<circle cx='50' cy='50' r='45' strokeWidth='10'/>
			</svg>
		);
	}

	static get Ok() {
		return (
			<svg className='cs-symbols-stroke' viewBox="0 0 100 100">
				<line x1="10" y1="60" x2="50" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="50" y1="90" x2="90" y2="10" strokeWidth="10" strokeLinecap="round"></line>
			</svg>
		);
	}

	static get On() {
		return (
			<svg className='cs-symbols-stroke' viewBox="0 0 100 100">
				<line x1="50" y1="5" x2="50" y2="95" strokeWidth="10" strokeLinecap="round"></line>
			</svg>
		);
	}

	static get Warning() {
		return (
			<svg viewBox="0 0 100 100" className="cs-symbols-stroke">
				<line x1="50" y1="10" x2="10" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="10" y1="90" x2="90" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="90" y1="90" x2="50" y2="10" strokeWidth="10" strokeLinecap="round"></line>
			</svg>
		);
	}
}

export default CSSymbols;
