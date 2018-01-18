import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSChanger from './CSChanger';

class CSIntervalChanger extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0};
	}

	componentDidMount()
	{
		var intervalId = setInterval(() => {
			this.setState((state) => ({
				active: state.active + 1
			}));
		}, this.props.interval);
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	render() {
		return (
			<CSChanger active={this.state.active % React.Children.count(this.props.children)}>
				{this.props.children}
			</CSChanger>
		);
	}
}

CSIntervalChanger.defaultProps = {
	interval: 10000,
};

CSIntervalChanger.propTypes = {
	interval:	PropTypes.number,
	children:	PropTypes.arrayOf(PropTypes.node).isRequired
};

export default CSIntervalChanger;