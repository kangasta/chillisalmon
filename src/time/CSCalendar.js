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
			this.state = this.getDateState();
		}
	}

	getDateState() {
		const date = new Date();
		return {
			date: date
		};
	}

	getFirstDayColumn() {
		return CSCalendar.jsToIsoWeekday((new Date(
			this.state.date.getFullYear(),
			this.state.date.getMonth(),
			1
		)).getDay());
	}

	static jsToIsoWeekday(jsWeekday) {
		return (jsWeekday - 1) < 0 ? 6 : (jsWeekday - 1);
	}

	static getIsoWeekOfYear(date, yearOffset=0) {
		const baseYear = date.getFullYear() + yearOffset;

		const firstDayOfYear = new Date(Date.UTC(baseYear, 0, 1));
		const firstWeekdayOfYear = CSCalendar.jsToIsoWeekday((firstDayOfYear.getDay()));
		const mondayOfFirstWeekOfYear = firstWeekdayOfYear <= 3
			? new Date(Date.UTC(baseYear, 0, -firstWeekdayOfYear))
			: new Date(Date.UTC(baseYear, 0, 7 - firstWeekdayOfYear));

		const today = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

		const weeknum = Math.ceil((today - mondayOfFirstWeekOfYear) / 1000 / 3600 / 24 / 7);

		return weeknum > 0 ? weeknum : CSCalendar.getIsoWeekOfYear(date, -1);
	}

	static isToday(date) {
		const today = new Date();
		return (
			date.getFullYear() === today.getFullYear() &&
			date.getMonth() === today.getMonth() &&
			date.getDate() === today.getDate()
		);
	}

	componentDidMount() {
		if (this.props.updateInterval) {
			this.setState({
				updateId: setInterval(() => {
					this.setState(this.getDateState());
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
						<th className='WeekNumber'>{this.props.weekTitle}</th>
						{dates.slice(0,7).map(date => (
							<th key={date} className='Weekday'>{date.toLocaleString(this.props.locale, this.weekday_print)}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{[...Array(6).keys()].map(i => (
						<tr key={i}>
							<td key='weeknum' className='WeekNumber'>{CSCalendar.getIsoWeekOfYear(dates[i * 7])}</td>
							{dates.slice(i * 7, (i + 1) * 7).map(day => (
								<td key={day} className={'Date' + (CSCalendar.isToday(day) ? ' Today' : '')}>{day.getDate()}</td>
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
	weekTitle: 'Week'
};

CSCalendar.propTypes = {
	className: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	locale: PropTypes.string,
	updateInterval: PropTypes.number,
	weekTitle: PropTypes.string
};

export default CSCalendar;