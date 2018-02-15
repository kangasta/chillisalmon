import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSElement } from '../ChilliSalmon';

class CSStatus extends Component {
	static get OK() { return 0; }
	static get WARN() { return 1; }
	static get ERR() { return 2; }

	getStatusSymbol() {
		return (
			///*
			<svg className='cs-element-head-symbol-stroke' viewBox="0 0 100 100">
				<line x1="10" y1="60" x2="50" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="50" y1="90" x2="90" y2="10" strokeWidth="10" strokeLinecap="round"></line>
			</svg>
			//*/
			/*
			<svg viewBox="0 0 100 100" className="cs-element-head-symbol-stroke">
				<line x1="50" y1="10" x2="10" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="10" y1="90" x2="90" y2="90" strokeWidth="10" strokeLinecap="round"></line>
				<line x1="90" y1="90" x2="50" y2="10" strokeWidth="10" strokeLinecap="round"></line>
			</svg>
			*/
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
	title: PropTypes.node
};

export default CSStatus;
