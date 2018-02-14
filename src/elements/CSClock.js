import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-timezone';

import { CSElement } from '../ChilliSalmon';

import '../../style/CSEffects.css';

class CSClock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: this.getTime(),
			city: this.getInfo()
		};
	}

	componentDidMount() {
		var intervalId = setInterval(() => {
			this.setState({ time: this.getTime() });
		}, 15e3);
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	getTime() {
		if (this.props.timezone && moment.tz.zone(this.props.timezone)) {
			return moment().tz(this.props.timezone).format('HH:mm');
		}
		return moment().format('HH:mm');
	}

	getInfo() {
		if (this.props.timezone && moment.tz.zone(this.props.timezone)) {
			return this.props.timezone.split('/')[1];
		}
		return moment.tz.guess().split('/')[1];
	}

	getAnalogClock() {
		const time = this.state.time.split(':');
		const h_rotate = (Number(time[0]) % 12 + Number(time[1]) / 60) * 30;
		const min_rotate = Number(time[1]) * 6;
		return (
			<svg className='cs-element-head-symbol-stroke' viewBox="0 0 100 100">
				<circle cx='50' cy='50' r='47.5'
					strokeWidth='5'
				/>
				<line x1='50' y1='50' x2='50' y2='15'
					strokeWidth='5'
					strokeLinecap='round'
					transform={'rotate(' + min_rotate.toString() + ' 50 50)'}/>
				<line x1='50' y1='50' x2='50' y2='25'
					strokeWidth='5'
					strokeLinecap='round'
					transform={'rotate(' + h_rotate.toString() + ' 50 50)'}/>
			</svg>
		);
	}

	render() {
		return (
			<CSElement addClassName='cs-clock' head={this.getAnalogClock()} title={this.state.time} {...this.props}>
				{this.state.city}
			</CSElement>
		);
	}
}

CSClock.defaultProps = {
	children: undefined,
	timezone: undefined
};

CSClock.propTypes = {
	children: PropTypes.node,
	timezone: PropTypes.string
};

export default CSClock;
