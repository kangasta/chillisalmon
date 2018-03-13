import moment from 'moment';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CSChanger } from '../ChilliSalmon';

class CSTimeChanger extends Component {
	constructor(props) {
		super(props);
		this.state = {active: 0};
	}

	componentDidMount()
	{
		var intervalId = setInterval(() => {
			var active = this.props.times.map(
				(time) => moment(time,this.props.format)
			).reverse().findIndex((a) => (moment() > a));
			active = active < 0
				? 0
				: React.Children.count(this.props.children) - 1 - active;
			this.setState({
				active: Math.min(
					active, React.Children.count(this.props.children) - 1
				)
			});
		}, 60e3);
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	render() {
		return (
			<CSChanger active={this.state.active}>
				{this.props.children}
			</CSChanger>
		);
	}
}

CSTimeChanger.defaultProps = {
	times: [],
	children: null,
	format: 'HH:mm'
};

CSTimeChanger.propTypes = {
	times:			PropTypes.arrayOf(PropTypes.string),
	children:		PropTypes.array.isRequired,
	format: 		PropTypes.string
};

export default CSTimeChanger;