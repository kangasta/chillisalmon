import React, { Component } from 'react';

import '../style/CSSymbols.css';
import '../style/CSEffects.css';

class CSSymbols extends Component {
	static get CPU() {
		return (
			<svg className='cs-symbols-cpu cs-symbols-fill' viewBox='0 0 100 100'>
				<defs>
					<mask id="cpu-mask">
						<rect x="10" y="10" width="80" height="80" rx="5" ry="5" fill="white"/>

						<rect x="0" y="21" width="100" height="4" fill="white"/>
						<rect x="0" y="32" width="100" height="4" fill="white"/>
						<rect x="0" y="43" width="100" height="4" fill="white"/>
						<rect x="0" y="54" width="100" height="4" fill="white"/>
						<rect x="0" y="65" width="100" height="4" fill="white"/>
						<rect x="0" y="76" width="100" height="4" fill="white"/>

						<rect x="21" y="0" width="4" height="100" fill="white"/>
						<rect x="32" y="0" width="4" height="100" fill="white"/>
						<rect x="43" y="0" width="4" height="100" fill="white"/>
						<rect x="54" y="0" width="4" height="100" fill="white"/>
						<rect x="65" y="0" width="4" height="100" fill="white"/>
						<rect x="76" y="0" width="4" height="100" fill="white"/>

						<rect x="20" y="20" width="60" height="60" rx="3" ry="3" fill="black"/>
					</mask>
				</defs>

				<rect x="0" y="0" width="100" height="100" mask="url(#cpu-mask)"/>
			</svg>
		);
	}
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

	static get NIC() {
		return (
			<svg className='cs-symbols-nic cs-symbols-fill' viewBox='0 0 100 100'>
				<defs>
					<mask id="nic-mask">
						<rect x="5" y="5" width="90" height="90" rx="5" ry="5" fill="white"/>
						<rect x="15" y="15" width="70" height="50" rx="5" ry="5" fill="black"/>
						<rect x="30" y="60" width="40" height="25" rx="5" ry="5" fill="black"/>
						<rect x="34" y="15" width="2" height="10" fill="white"/>
						<rect x="39" y="15" width="2" height="10" fill="white"/>
						<rect x="44" y="15" width="2" height="10" fill="white"/>
						<rect x="49" y="15" width="2" height="10" fill="white"/>
						<rect x="54" y="15" width="2" height="10" fill="white"/>
						<rect x="59" y="15" width="2" height="10" fill="white"/>
						<rect x="64" y="15" width="2" height="10" fill="white"/>
						<circle cx='20' cy='75' r='5' fill="black"/>
						<circle cx='80' cy='75' r='5' fill="black"/>
					</mask>
				</defs>

				<rect x="0" y="0" width="100" height="100" rx="5" ry="5" mask="url(#nic-mask)"/>
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

	static get Ok() {
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
