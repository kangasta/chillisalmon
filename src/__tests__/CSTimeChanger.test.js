import React from 'react';
import { mount } from 'enzyme';

import { CSTimeChanger } from '../ChilliSalmon';

jest.useFakeTimers();

describe('CSTimeChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSTimeChanger active={0}><div/><div/></CSTimeChanger>
		);
	});
	it('goes throught it\'s children as time passes', () => {
		const dates = [
			new Date('2017-06-12T03:30'),
			new Date('2017-06-12T11:30'),
			new Date('2017-06-12T17:30')
		];
		const times = ['08-00','16-00'];
		const classes = ['00-00'].concat(times).map(a => ('time-machine-test-' + a));
		const wrapper = mount(
			<CSTimeChanger times={times} format='HH-mm'>
				{Array(3).fill(1).map((_,i) => (
					<div key={i} className={classes[i]}/>
				))}
			</CSTimeChanger>
		);
		for (var i = 0; i < classes.length; i++) {
			Date.now = jest.fn().mockReturnValue(dates[i]);
			jest.runOnlyPendingTimers();
			jest.runTimersToTime(1000); // Allow time for CSChanger animations
			wrapper.update();
			expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
			expect(wrapper.find('.cs-changer-item-active').find('.' + classes[i]).exists()).toBe(true);
		}
	});
	it('clears timers at unmount', () => {
		const wrapper = mount(
			<CSTimeChanger active={0}><div/><div/></CSTimeChanger>
		);
		wrapper.unmount();
		expect(clearInterval).toHaveBeenCalled();
	});
});
