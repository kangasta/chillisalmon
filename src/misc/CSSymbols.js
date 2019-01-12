import React, { Component } from 'react';

import '../../style/CSSymbols.css';

class CSSymbols extends Component {
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

	static get On() {
		return (
			<svg className='cs-symbols-on cs-symbols-stroke' viewBox='0 0 100 100'>
				<line x1='50' y1='5' x2='50' y2='95' strokeWidth='10' strokeLinecap='round'></line>
			</svg>
		);
	}

	/* New: */

	static get Error() {
		return (
			<svg className='Symbol Fill' viewBox='0 0 64 64'>
				<defs>
					<mask id='ErrorMask'>
						<circle cx='32' cy='32' r='32' fill='white'/>
						{/*<rect x='0' y='0' height='64' width='64' rx='8' ry='8' fill='white'/>*/}
						<path d='M 20 20 L 44 44 M 20 44 L 44 20' stroke='black' strokeWidth='6' fill='none' strokeLinecap='round' strokeLinejoin='round'/>
						{/*
						<path d='M 16 16 L 48 48 M 16 48 L 48 16' stroke='black' strokeWidth='6' fill='none' strokeLinecap='round'/>*/}
					</mask>
				</defs>
				<rect x='0' y='0' width='64' height='64' mask='url(#ErrorMask)'/>
			</svg>
		);
	}

	static get Loading() {
		return (
			<svg className='Symbol Stroke Loading' viewBox='0 0 64 64'>
				{/*
				<defs>
					<mask id='LoadingMask'>
						<circle cx='32' cy='32' r='32' fill='white'/>
						{[-16, 0, 16].map(x => <circle cx={32 + x} cy='32' r='5' fill='black'/>)}
					</mask>
				</defs>
				<rect x='0' y='0' width='64' height='64' mask='url(#LoadingMask)'/>
				*/}
				<path d='M 16 4 v 16 l 10 12 l -10 12 v 16 h 32 v -16 l -10 -12 l 10 -12 v -16 h -32 M 16 6 l 16 6 l 16 -6 M 16 58 l 16 -6 l 16 6' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round'/>
			</svg>
		);
	}

	static get Settings() {
		return (
			<svg className='Symbol Fill Settings' viewBox='0 0 64 64'>
				<defs>
					<mask id='SettingsMask'>
						<circle cx='32' cy='32' r='26' fill='white'/>
						{['0', '45', '90', '135'].map(rotate => (
							<rect key={rotate} x='0' y='26' width='64' height='12' rx='4' ry='4' fill='white' transform={'rotate(' + rotate + ' 32,32)'}/>
						))}
						<circle cx='32' cy='32' r='16' fill='black'/>
					</mask>
				</defs>

				<rect x='0' y='0' width='64' height='64' mask='url(#SettingsMask)'/>
			</svg>
		);
	}

	static get Success() {
		return (
			<svg className='Symbol Fill' viewBox='0 0 64 64'>
				<defs>
					<mask id='SuccessMask'>
						<circle cx='32' cy='32' r='32' fill='white'/>
						<path d='M 16 32 L 32 44 L 44 20' stroke='black' strokeWidth='6' fill='none' strokeLinecap='round' strokeLinejoin='round'/>
					</mask>
				</defs>
				<rect x='0' y='0' width='64' height='64' mask='url(#SuccessMask)'/>
			</svg>
		);
	}

	static get Warning() {
		return (
			<svg className='Symbol Fill' viewBox='0 0 64 64'>
				<defs>
					<mask id='WarningMask'>
						<path d='M 32 4 l 28 56 h -56 l 28 -56' fill='white' stroke='white' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round'/>
						<path d='M 32 20 v 20' stroke='black' strokeWidth='6' fill='none' strokeLinecap='round' strokeLinejoin='round'/>
						<circle cx='32' cy='54' r='3' fill='black'/>
					</mask>
				</defs>
				<rect x='0' y='0' width='64' height='64' mask='url(#WarningMask)'/>
			</svg>
		);
	}
}

export default CSSymbols;
