import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSSubElement.css';

class CSSubElement extends Component {
	render() {
		const { className, head, title, ...props } = this.props;
		return (
			<div className={'cs-sub-element ' + ' ' + className} {...props}>
				{ head ? <div className='cs-sub-element-head'>{head}</div> : null }
				<div className='cs-sub-element-title'>{title}</div>
			</div>
		);
	}
}

CSSubElement.defaultProps = {
	className: '',
	head: '',
	title: '',
};

CSSubElement.propTypes = {
	className: PropTypes.string,
	head: PropTypes.node,
	title: PropTypes.node,
};

export default CSSubElement;
