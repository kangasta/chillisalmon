import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger, CSElement, CSSymbols } from '../ChilliSalmon';

class CSStatus extends Component {
	static get OK() { return 0; }
	static get WARN() { return 1; }
	static get ERR() { return 2; }

	getStatusSymbol() {
		return (
			<CSChanger active={this.props.status}>
				{CSSymbols.Ok}
				{CSSymbols.Warning}
				{CSSymbols.Error}
			</CSChanger>
		);
	}

	render() {
		const {children, title, right, ...props} = this.props;
		return (
			<CSElement addClassName='cs-status' head={this.getStatusSymbol()} title={title} right={right} {...props}>
				{children}
			</CSElement>
		);
	}
}

CSStatus.defaultProps = {
	children: '',
	right: '',
	status: CSStatus.OK,
	title: 'Status'
};

CSStatus.propTypes = {
	children: PropTypes.node,
	right: PropTypes.node,
	status: PropTypes.number,
	title: PropTypes.node
};

export default CSStatus;
