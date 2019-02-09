import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';

import { CSCalendar } from '../ChilliSalmon';

describe('CSCalendar.getIsoWeekOfYear', ()=>{
	it('returns correct week number', () => {
		for(var year = 1999; year < 2024; year++) {
			for(var month = 0; month < 12; month++) {
				const date = new Date(year, month, 1);

				const got = CSCalendar.getIsoWeekOfYear(date).toString();
				const expected = moment(date).format('W');
				try {
					expect(got).toEqual(expected);
				} catch(e) {
					// eslint-disable-next-line no-console
					console.error('Expected week number ' + expected + ' from date ' + date.toString() + ', got ' + got + '.');
					throw(e);
				}
			}
		}
	});
});

describe('CSCalendar', () => {
	it('renders without crashing', () => {
		mount(
			<CSCalendar/>);
	});
});
