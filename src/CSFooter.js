import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/CSFooter.css';

class CSFooter extends Component {
	render() {
		const { className, ...props } = this.props;
		return (
			<div className={'cs-footer ' + className} {...props}/>
		);
	}
}

CSFooter.defaultProps = {
	className: ''
};

CSFooter.propTypes = {
	className: PropTypes.string
};

export default CSFooter;
