import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger, CSStatus } from '../ChilliSalmon';

const anyToString = any => {
	try {
		return any.toString();
	} catch(e) {
		return '';
	}
};

class CSValidatorChanger extends Component {
	getActive() {
		if (this.props.error !== undefined) return 0;
		if (this.props.loading !== undefined) return 1;
		if (this.props.success !== undefined) return 2;
		return 3;
	}

	render() {
		return (
			<CSChanger active={this.getActive()}>
				<CSStatus status={CSStatus.status.ERROR} message={anyToString(this.props.error)} no_icon={this.props.no_icon}/>
				<CSStatus status={CSStatus.status.LOADING} message={anyToString(this.props.loading)} no_icon={this.props.no_icon}/>
				<CSStatus status={CSStatus.status.SUCCESS} message={anyToString(this.props.success)} no_icon={this.props.no_icon}/>
				{this.props.children}
			</CSChanger>
		);
	}
}

CSValidatorChanger.defaultProps = {
};

CSValidatorChanger.propTypes = {
	loading:	PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	error:		PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	success:	PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children:	PropTypes.node,
	no_icon:	PropTypes.bool
};

export default CSValidatorChanger;