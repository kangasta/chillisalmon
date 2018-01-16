import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CSBackground.css';

class CSBackground extends Component {
	render() {
		return (
			<div className={'cs-background ' + this.props.className}>
				{this.props.children}
			</div>
		);
	}
}

CSBackground.defaultProps = {
	children: '',
	className: ''
};

CSBackground.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	className: PropTypes.string
};

export default CSBackground;
