import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSElement, CSSymbols } from '../ChilliSalmon';

class CSError extends Component {
	render() {
		const {children, ...props} = this.props;
		return (
			<CSElement addClassName='cs-error' head={CSSymbols.Error} title='Error' {...props}>
				{children}
			</CSElement>
		);
	}
}

CSError.defaultProps = {
	children: ''
};

CSError.propTypes = {
	children: PropTypes.node
};

export default CSError;
