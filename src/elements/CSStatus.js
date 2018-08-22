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

	static getStatusString(status) {
		switch (status) {
		case CSStatus.OFF:
			return 'off';
		case CSStatus.ON:
			return 'on';
		case CSStatus.OK:
			return 'ok';
		case CSStatus.WARN:
			return 'warning';
		case CSStatus.ERR:
			return 'error';
		case CSStatus.LOAD:
			return 'loading';
		}
	}

	static getStatusSymbol(status) {
		return (
			<CSChanger active={status}>
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
		const {children, title, status, symbol, right, ...props} = this.props;
		return (
			<CSElement addClassName={'cs-status cs-status-' + CSStatus.getStatusString(status)} head={symbol ? symbol : CSStatus.getStatusSymbol(status)} title={title} right={right} {...props}>
				{children}
			</CSElement>
		);
	}
}

CSStatus.defaultProps = {
	children: '',
	right: '',
	status: CSStatus.OK,
	symbol: null,
	title: 'Status'
};

CSStatus.propTypes = {
	children: PropTypes.node,
	right: PropTypes.node,
	status: PropTypes.number,
	symbol: PropTypes.node,
	title: PropTypes.node
};

export default CSStatus;
