import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/CSBackground.css';

class CSBackground extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<div className={'cs-background ' + className} {...props}/>
		);
	}
}

CSBackground.defaultProps = {
	className: ''
};

CSBackground.propTypes = {
	className: PropTypes.string
};

export default CSBackground;
