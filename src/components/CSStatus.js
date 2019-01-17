import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSSymbols } from '../ChilliSalmon';

class CSStatus extends Component {
	static get status() {
		return {
			ERROR: 0,
			LOADING: 1,
			SUCCESS: 2
		};
	}

	static get statusClass() {
		return [
			'Error',
			'Loading',
			'Success'
		];
	}

	getClass() {
		return CSStatus.statusClass[this.props.status];
	}

	getSymbol() {
		switch(this.props.status) {
		case CSStatus.status.ERROR:
			return CSSymbols.Error;
		case CSStatus.status.LOADING:
			return CSSymbols.Loading;
		case CSStatus.status.SUCCESS:
			return CSSymbols.Success;
		default:
			return null;
		}
	}

	render() {
		return (
			<div className={'CSStatus ' + this.getClass() + ' ' + this.props.className}>
				<div className='Icon'>
					{this.props.no_icon ? null : this.getSymbol()}
				</div>
				<h1>{this.getClass()}</h1>
				<p>{this.props.message}</p>
			</div>
		);
	}
}

CSStatus.defaultProps = {
	className: ''
};

CSStatus.propTypes = {
	className: PropTypes.string,
	status:	PropTypes.oneOf(Object.values(CSStatus.status)),
	/*children: PropTypes.node*/
	message: PropTypes.string,
	no_icon: PropTypes.bool
};

export default CSStatus;