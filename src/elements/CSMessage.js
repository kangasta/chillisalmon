import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSElement, CSSymbols } from '../ChilliSalmon';

class CSMessage extends Component {
	render() {
		const {children, title, ...props} = this.props;
		return (
			<CSElement addClassName='cs-message' head={CSSymbols.Message} long={true} title={title} {...props}>
				{children}
			</CSElement>
		);
	}
}

CSMessage.defaultProps = {
	children: '',
	title: 'Message'
};

CSMessage.propTypes = {
	children: PropTypes.node,
	title: PropTypes.node
};

export default CSMessage;
