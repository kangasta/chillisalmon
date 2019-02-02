import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import '../../style/CSCalendar.css';

class CSCalendar extends Component {
	get month_print() { return {month: 'long', year: 'numeric'}; }
	get weekday_print() { return {weekday: 'narrow'}; }

	constructor(props) {
		super(props);

		if (props.date !== undefined) {
			this.state = {
				date: props.date
			};
		} else {
			this.state = this.getDate();
		}
	}

	getDate() {
		const date = new Date();
		return {
			date: date
		};
	}

	getFirstDayColumn() {
		const weekday = (new Date(
			this.state.date.getFullYear(),
			this.state.date.getMonth(),
			1
		)).getDay() - 1;
		return weekday < 0 ? 6 : weekday;
	}

	componentDidMount() {
		if (this.props.updateInterval) {
			this.setState({
				updateId: setInterval(() => {
					this.setState(this.getDate());
				}, this.props.updateInterval)
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.updateId);
	}

	render() {
		const today = this.state.date;

		const dates = [...Array(6*7).keys()].map(date => date - this.getFirstDayColumn() + 1).map(date => new Date(today.getFullYear(), today.getMonth(), date));
		return (
			<table className={this.props.className + ' CSCalendar'}>
				<thead>
					<tr>
						<th colSpan='8' className='Title'>{today.toLocaleString(this.props.locale, this.month_print)}</th>
					</tr>
					<tr>
						<th className='Weekday'></th>
						{dates.slice(0,7).map(date => (
							<th key={date} className='Weekday'>{date.toLocaleString(this.props.locale, this.weekday_print)}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{[...Array(6).keys()].map(i => (
						<tr key={i}>
							<td key='weeknum' className='WeekNumber'></td>
							{dates.slice(i * 7, (i + 1) * 7).map(day => (
								<td key={day} className='Date'>{day.getDate()}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

CSCalendar.defaultProps = {
	className: '',
	locale: 'en-US',
	updateInterval: 3600e3,
	weekTitle: 'Wk'
};

CSCalendar.propTypes = {
	className: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	locale: PropTypes.string,
	updateInterval: PropTypes.number,
	weekTitle: PropTypes.string
};

export default CSCalendar;