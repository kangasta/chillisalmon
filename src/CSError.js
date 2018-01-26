import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSElement from './CSElement';

class CSError extends Component {
	getErrorSymbol() {
		return (
			<svg className='cs-element-head-symbol-stroke' viewBox="0 0 100 100">
				<line x1='10' y1='10' x2='90' y2='90' strokeWidth='10'/>
				<line x1='10' y1='90' x2='90' y2='10' strokeWidth='10'/>
			</svg>
		);
	}

	render() {
		const {children, ...props} = this.props;
		return (
			<CSElement addClassName='cs-error' head={this.getErrorSymbol()} title='Error' {...props}>
				{children}
			</CSElement>
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
