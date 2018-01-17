import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/CSFooter.css';

class CSFooter extends Component {
	render() {
		return (
			<div className={'cs-footer ' + this.props.className}>
				{this.props.children}
			</div>
		);
	}
}

CSFooter.defaultProps = {
	children: '',
	className: ''
};

CSFooter.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	className: PropTypes.string
};

export default CSFooter;
