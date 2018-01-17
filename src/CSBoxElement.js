import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import CSDivWrapper from './CSDivWrapper';

import '../style/CSBoxElement.css';

class CSBoxElement extends Component {
	render() {
		return (
			<div className='cs-box-element ' {...this.props}>
				<div className='cs-box-element-head'>{this.props.head}</div>
				<div className='cs-box-element-title'>{this.props.title}</div>
				<div className='cs-box-element-content'>{this.props.children}</div>
			</div>
		);
	}
}

CSBoxElement.defaultProps = {
	head: '',
	title: '',
	children: ''
};

CSBoxElement.propTypes = {
	head: PropTypes.node,
	title: PropTypes.node,
	children: PropTypes.node
};

export default CSBoxElement;
