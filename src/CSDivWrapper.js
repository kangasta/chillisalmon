import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CSDivWrapper extends Component {
	render() {
		const { addClassName, className, ...props } = this.props;
		return (
			<div className={addClassName + ' ' + className} {...props}/>
		);
	}
}

CSDivWrapper.defaultProps = {
	className: '',
	addClassName: ''
};

CSDivWrapper.propTypes = {
	className: PropTypes.string,
	addClassName: PropTypes.string
};

export default CSDivWrapper;
