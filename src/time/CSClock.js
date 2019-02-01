import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSClock.css';

class CSClock extends Component {
	constructor(props) {
		super(props);
		
		var h = this.props.h,m = this.props.m,s = this.props.s;
		if (h !== undefined || m !== undefined) {
			this.state = {
				time: {
					h: h,
					m: m,
					s: (s || 0),
				}
			};
		} else {
			this.state = this.getTime();
		}
	}

	getTime() {
		const time = new Date();
		return {
			time: {
				h: time.getHours(),
				m: time.getMinutes(),
				s: time.getSeconds(),
			}
		};
	}

	getLineLength(i) {
		if (!(i % 15)) {
			return this.props.quarterLineLength || this.props.twelfthlineLength || this.props.lineLength;
		} else if (!(i % 5)) {
			return this.props.twelfthlineLength || this.props.lineLength;
		} else {
			return this.props.lineLength;
		}
	}

	getLineClass(i) {
		if (!(i % 15) && this.props.quarterLineLength !== undefined) {
			return 'Quarter';
		} else if (!(i % 5) && this.props.twelfthlineLength !== undefined) {
			return 'Twelfth';
		} else {
			return 'Sixtieth';
		}
	}

	componentDidMount() {
		if (this.props.updateInterval) {
			this.setState({
				updateId: setInterval(() => {
					this.setState(this.getTime());
				}, this.props.updateInterval)
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.updateId);
	}

	render() {
		const time = this.state.time;
		const getHourRotate = () => (time.h % 12) * 30 + time.m / 2;
		const getMinuteRotate = () => time.m * 6 + time.s / 10;

		return (
			<svg className={this.props.className + ' CSClock Symbol Stroke'} viewBox='0 0 128 128'>
				<circle className='Circle' cx='64' cy='64' r='60'/>
				{[...Array(60).keys()].map(i => (
					<path key={i} className={this.getLineClass(i)} d={'M 64 4 v ' + this.getLineLength(i).toString()} transform={'rotate(' + (i * 6).toString() + ' 64 64)'}/>
				))}
				<path className='Hour' d={'M 64 64 v -' + this.props.hourLength} transform={'rotate(' + getHourRotate() + ' 64 64)'}/>
				<path className='Minute' d={'M 64 64 v -' + this.props.minuteLength} transform={'rotate(' + getMinuteRotate() + ' 64 64)'}/>
			</svg>
		);
	}
}

CSClock.defaultProps = {
	className: '',
	updateInterval: 10e3,
	quarterLineLength: 16,
	twelfthlineLength: 12,
	lineLength: 8,
	hourLength: 32,
	minuteLength: 44,
	secondLength: 48,
};

CSClock.propTypes = {
	className: PropTypes.string,
	h: PropTypes.number,
	m: PropTypes.number,
	s: PropTypes.number,
	updateInterval: PropTypes.number,
	quarterLineLength: PropTypes.number,
	twelfthlineLength: PropTypes.number,
	lineLength: PropTypes.number,
	hourLength: PropTypes.number,
	minuteLength: PropTypes.number,
	secondLength: PropTypes.number,
};

export default CSClock;