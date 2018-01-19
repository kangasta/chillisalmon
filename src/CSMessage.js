import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSBoxElement from './CSBoxElement';

import '../style/CSEffects.css';

class CSMessage extends Component {
	getLoadingSymbol() {
		return (
			<svg className='cs-box-element-head-symbol-fill' viewBox="0 0 100 100">
				<rect x='0' y='0' width='100' height='70'/>
				<polygon points="0,60 0,100 40,60"/>
			</svg>
		);
	}

	render() {
		const {children, title, ...props} = this.props;
		return (
			<CSBoxElement addClassName='cs-loading' head={this.getLoadingSymbol()} long={true} title={title} {...props}>
				{children}
			</CSBoxElement>
		);
	}
}

CSMessage.defaultProps = {
	children: '',
	title: 'Message'
};

CSMessage.propTypes = {
	children: PropTypes.node,
	title: PropTypes.node
};

export default CSMessage;