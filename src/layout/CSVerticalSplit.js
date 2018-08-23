import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSVerticalSplit.css';

class CSVerticalSplit extends Component {
	render() {
		const { addClassName, className, left, right, ...props } = this.props;
		return (
			<div className={'cs-vertical-split ' + addClassName + ' ' + className} {...props}>
				<div className='cs-vertical-split-left'>{left}</div>
				<div className='cs-vertical-split-right'>{right}</div>
			</div>
		);
	}
}

export default CSVerticalSplit;

CSVerticalSplit.defaultProps = {
	addClassName: '',
	className: '',
	left: '',
	right: '',
};

CSVerticalSplit.propTypes = {
	addClassName: PropTypes.string,
	className: PropTypes.string,
	left: PropTypes.node,
	right: PropTypes.node,
};