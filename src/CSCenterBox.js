import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/CSCenterBox.css';

class CSCenterBox extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<div className={'cs-center-box ' + className} {...props}/>
		);
	}
}

CSCenterBox.defaultProps = {
	className: ''
};

CSCenterBox.propTypes = {
	className: PropTypes.string
};

export default CSCenterBox;
