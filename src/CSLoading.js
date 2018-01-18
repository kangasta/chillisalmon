import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSBoxElement from './CSBoxElement';

import '../style/CSEffects.css';
import '../style/CSLoading.css';

class CSLoading extends Component {
	getLoadingSymbol() {
		return (
			<svg className='cs-box-element-head-symbol cs-effect-rotate' viewBox="0 0 100 100">
				<circle
					cx='50' cy='50' r='45' fill='transparent'
					strokeWidth='10'
					strokeLinecap='round'
					strokeDasharray='0,28.27433'
				/> {/* strokeDasharray 0,28.27433 -> 10 dots */}
			</svg>
		);
	}

	render() {
		const {children, ...props} = this.props;
		return (
			<CSBoxElement addClassName='cs-loading' head={this.getLoadingSymbol()} title='Loading' {...props}>
				{children}
			</CSBoxElement>
		);
	}
}

CSLoading.defaultProps = {
	children: ''
};

CSLoading.propTypes = {
	children: PropTypes.node
};

export default CSLoading;
