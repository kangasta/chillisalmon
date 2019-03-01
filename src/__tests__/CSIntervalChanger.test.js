import React from 'react';
import { mount } from 'enzyme';

import { CSIntervalChanger } from '../ChilliSalmon';

describe('CSIntervalChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSIntervalChanger>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</CSIntervalChanger>
		);
	});
	it('changes active component every interval', () => {
		const wrapper = mount(
			<CSIntervalChanger interval={1000}>
				<p className='Test1'>1</p>
				<p className='Test2'>2</p>
				<p className='Test3'>3</p>
			</CSIntervalChanger>
		);

		for (var i = 0; i < 3; i++) {
			jest.runOnlyPendingTimers();
			//jest.runTimersToTime(600); // Allow time for CSChanger animations
			wrapper.update();

			const lookingFor = '.cs-changer-item-active .Test' + (i + 1).toString();

			expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
			expect(wrapper.exists(lookingFor)).toBe(true);
		}
	});
	it('clears timers at unmount', () => {
		const wrapper = mount(
			<CSIntervalChanger active={0}><div/><div/></CSIntervalChanger>
		);
		wrapper.unmount();
		expect(clearInterval).toHaveBeenCalled();
	});
});
