import React, { Component } from 'react';

import '../../style/CSSymbols.css';

class CSSymbols extends Component {
	static get Error() {
		return (
			<svg className='cs-symbols-error cs-symbols-stroke' viewBox='0 0 100 100'>
				<line x1='10' y1='10' x2='90' y2='90' strokeWidth='10'/>
				<line x1='10' y1='90' x2='90' y2='10' strokeWidth='10'/>
			</svg>
		);
	}

	static get Loading() {
		return (
			<svg className='cs-symbols-loading cs-symbols-stroke cs-effect-rotate' viewBox='0 0 100 100'>
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
			<svg className='cs-symbols-message cs-symbols-fill' viewBox='0 0 100 100'>
				<rect x='0' y='0' width='100' height='70'/>
				<polygon points='0,60 0,100 40,60'/>
			</svg>
		);
	}

	static get Off() {
		return (
			<svg className='cs-symbols-off cs-symbols-stroke' viewBox='0 0 100 100'>
				<circle cx='50' cy='50' r='45' strokeWidth='10'/>
			</svg>
		);
	}

	static get Success() {
		return (
			<svg className='cs-symbols-ok cs-symbols-stroke' viewBox='0 0 100 100'>
				<line x1='10' y1='60' x2='50' y2='90' strokeWidth='10' strokeLinecap='round'></line>
				<line x1='50' y1='90' x2='90' y2='10' strokeWidth='10' strokeLinecap='round'></line>
			</svg>
		);
	}

	static get On() {
		return (
			<svg className='cs-symbols-on cs-symbols-stroke' viewBox='0 0 100 100'>
				<line x1='50' y1='5' x2='50' y2='95' strokeWidth='10' strokeLinecap='round'></line>
			</svg>
		);
	}

	static get Settings() {
		return (
			<svg className='cs-symbols-settings cs-symbols-fill' viewBox='0 0 100 100'>
				<defs>
					<mask id="cpu-mask">
						<circle cx="50" cy="50" r="37" fill="white"/>

						<rect x="0" y="42" width="100" height="16" rx="4" ry="4" fill="white" transform="rotate(0 50,50)"/>
						<rect x="0" y="42" width="100" height="16" rx="4" ry="4" fill="white" transform="rotate(45 50,50)"/>
						<rect x="0" y="42" width="100" height="16" rx="4" ry="4" fill="white" transform="rotate(90 50,50)"/>
						<rect x="0" y="42" width="100" height="16" rx="4" ry="4" fill="white" transform="rotate(135 50,50)"/>

						<circle cx="50" cy="50" r="25" fill="black"/>
					</mask>
				</defs>

				<rect x="0" y="0" width="100" height="100" mask="url(#cpu-mask)"/>
			</svg>
		);
	}

	static get Warning() {
		return (
			<svg className='cs-symbols-warning cs-symbols-stroke' viewBox='0 0 100 100'>
				<line x1='50' y1='10' x2='10' y2='90' strokeWidth='10' strokeLinecap='round'></line>
				<line x1='10' y1='90' x2='90' y2='90' strokeWidth='10' strokeLinecap='round'></line>
				<line x1='90' y1='90' x2='50' y2='10' strokeWidth='10' strokeLinecap='round'></line>
			</svg>
		);
	}
}

export default CSSymbols;
