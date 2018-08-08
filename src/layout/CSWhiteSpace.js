import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSWhiteSpace.css';

class CSWhiteSpace extends Component {
	render() {
		const { addClassName, className, ...props } = this.props;
		return (
			<div className={'cs-white-space ' + addClassName + ' ' + className} {...props}/>
		);
	}
}

CSWhiteSpace.defaultProps = {
	addClassName: '',
	className: '',
};

CSWhiteSpace.propTypes = {
	addClassName: PropTypes.string,
	className: PropTypes.string,
};

export default CSWhiteSpace;
