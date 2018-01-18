import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSBoxElement from './CSBoxElement';

import '../style/CSEffects.css';
import '../style/CSLoadingAndError.css';

class CSError extends Component {
	getErrorSymbol() {
		return (
			<svg className='cs-box-element-head-symbol' viewBox="0 0 100 100">
				<line x1='10' y1='10' x2='90' y2='90' strokeWidth='10'/>
				<line x1='10' y1='90' x2='90' y2='10' strokeWidth='10'/>
			</svg>
			/*
			<circle
				cx='50' cy='50' r='45' fill='transparent'
				strokeWidth='10'
				strokeLinecap='round'
				strokeDasharray='0,28.27433'
			/>
			*/
		);
	}

	render() {
		const {children, ...props} = this.props;
		return (
			<CSBoxElement addClassName='cs-error' head={this.getErrorSymbol()} title='Error' {...props}>
				{children}
			</CSBoxElement>
		);
	}
}

CSError.defaultProps = {
	children: ''
};

CSError.propTypes = {
	children: PropTypes.node
};

export default CSError;
