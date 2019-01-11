import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger } from '../ChilliSalmon';

class CSValidatorChanger extends Component {
	getActive() {
		if (this.props.error !== undefined) return 0;
		if (this.props.loading !== undefined) return 1;
		return 2;
	}

	getStatusComponent(type) {
		const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

		return (
			<div className={capitalize(type)}>
				<h1>{capitalize(type)}</h1>
				<p>{this.props[type.toLowerCase()]}</p>
			</div>
		);
	}

	render() {
		return (
			<CSChanger active={this.getActive()}>
				{this.getStatusComponent('error')}
				{this.getStatusComponent('loading')}
				{this.props.children}
			</CSChanger>
		);
	}
}

CSValidatorChanger.defaultProps = {
	loading: undefined,
	error: undefined
};

CSValidatorChanger.propTypes = {
	loading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children:	PropTypes.node
};

export default CSValidatorChanger;