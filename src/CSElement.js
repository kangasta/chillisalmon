import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import CSDivWrapper from './CSDivWrapper';

import '../style/CSElement.css';

class CSElement extends Component {
	render() {
		const { addClassName, children, className, head, long, right, title, ...props } = this.props;
		return (
			<div className={'cs-element ' + addClassName + ' ' + className} {...props}>
				{ head ? <div className='cs-element-head'>{head}</div> : null }
				<div className='cs-element-right'>{right}</div>
				<div className='cs-element-main'>
					<div className='cs-element-title'>{title}</div>
					<div className={'cs-element-content cs-element-content-' + (long ? 'long' : 'short')}>{children}</div>
				</div>
			</div>
		);
	}
}

CSElement.defaultProps = {
	addClassName: '',
	children: '',
	className: '',
	head: '',
	long: false,
	right: '',
	title: '',
};

CSElement.propTypes = {
	addClassName: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	head: PropTypes.node,
	long: PropTypes.bool,
	right: PropTypes.node,
	title: PropTypes.node,
};

export default CSElement;
