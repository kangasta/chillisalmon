import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger, CSElement, CSSymbols } from '../ChilliSalmon';

class CSStatus extends Component {
	static get OFF() { return 0; }
	static get ON() { return 1; }
	static get OK() { return 2; }
	static get WARN() { return 3; }
	static get ERR() { return 4; }
	static get LOAD() { return 5; }

	getStatusSymbol() {
		return (
			<CSChanger active={this.props.status}>
				{CSSymbols.Off}
				{CSSymbols.On}
				{CSSymbols.Ok}
				{CSSymbols.Warning}
				{CSSymbols.Error}
				{CSSymbols.Loading}
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
