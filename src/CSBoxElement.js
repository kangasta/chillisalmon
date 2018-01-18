import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import CSDivWrapper from './CSDivWrapper';

import '../style/CSBoxElement.css';

class CSBoxElement extends Component {
	render() {
		const { addClassName, children, className, head, long, title, ...props } = this.props;
		return (
			<div className={'cs-box-element ' + addClassName + ' ' + className} {...props}>
				<div className='cs-box-element-head'>{head}</div>
				<div className='cs-box-element-title'>{title}</div>
				<div className={'cs-box-element-content cs-box-element-content-' + (long ? 'long' : 'short')}>{children}</div>
			</div>
		);
	}
}

CSBoxElement.defaultProps = {
	addClassName: '',
	children: '',
	className: '',
	head: '',
	long: false,
	title: '',
};

CSBoxElement.propTypes = {
	addClassName: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	head: PropTypes.node,
	long: PropTypes.bool,
	title: PropTypes.node,
};

export default CSBoxElement;
