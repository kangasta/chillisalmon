import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSSymbols } from '../ChilliSalmon';

import '../../style/CSExpandable.css';

class CSExpandable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: props.expanded
		};

		this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState(prev => ({
			expanded: !prev.expanded
		}));
	}

	getClass() {
		return (this.state.expanded ? 'Expanded' : 'Hidden');
	}

	render() {
		return (
			<div className='CSExpandable'>
				<div className={'Content ' + this.getClass()}>
					{this.props.children}
				</div>
				<span className={'Icon ' + this.getClass()} onClick={this.toggleState}>
					{this.props.icon !== undefined ? this.props.icon : CSSymbols.Expandable}
				</span>
			</div>
		);
	}
}

CSExpandable.defaultProps = {
	expanded:	false,
};

CSExpandable.propTypes = {
	expanded:	PropTypes.bool,
	children:	PropTypes.node.isRequired,
	icon:		PropTypes.node,
};

export default CSExpandable;