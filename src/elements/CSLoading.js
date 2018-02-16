import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSElement, CSSymbols } from '../ChilliSalmon';

class CSLoading extends Component {
	render() {
		const {children, ...props} = this.props;
		return (
			<CSElement addClassName='cs-loading' head={CSSymbols.Loading} title='Loading' {...props}>
				{children}
			</CSElement>
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
