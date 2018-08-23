import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger, CSError, CSLoading } from '../ChilliSalmon';

class CSValidatorChanger extends Component {
	getActive() {
		if (this.props.error !== undefined) return 0;
		if (this.props.loading !== undefined) return 1;
		return 2;
	}

	render() {
		return (
			<CSChanger active={this.getActive()}>
				<CSError>{this.props.error ? this.props.error : ''}</CSError>
				<CSLoading>{this.props.loading ? this.props.loading : ''}</CSLoading>
				{this.props.children}
			</CSChanger>
		);
	}
}

CSValidatorChanger.defaultProps = {
	loading: undefined,
	error: undefined
};

CSValidatorChanger.propTypes = {
	loading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children:	PropTypes.node
};

export default CSValidatorChanger;