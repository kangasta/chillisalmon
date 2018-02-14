import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import 'moment-timezone';

import { CSClock } from '../ChilliSalmon';

jest.useFakeTimers();

describe('CSClock', () => {
	it('renders without crashing', () => {
		mount(<CSClock />);
	});
	it('shows time and guessed tz by default', () => {
		const wrapper = mount(<CSClock />);
		expect(wrapper.find('.cs-element-title').text()).toBe(moment().format('HH:mm'));
		expect(wrapper.find('.cs-element-content').text()).toBe(moment.tz.guess().split('/')[1]);
	});
	it('replaces \'_\' in timezone name with \' \'',()=>{
		const wrapper = mount(<CSClock timezone='America/New_York'/>);
		expect(wrapper.find('.cs-element-content').text()).toBe('New York');
	});
	it('allows custom timezone', () => {
		const wrapper = mount(<CSClock timezone='Asia/Shanghai'/>);
		expect(wrapper.find('.cs-element-title').text()).toBe(moment().tz('Asia/Shanghai').format('HH:mm'));
		expect(wrapper.find('.cs-element-content').text()).toBe('Shanghai');
	});
	it('updates state', () => {
		Date.now = jest.fn().mockReturnValue(new Date('2017-06-12T12:00'));
		const wrapper = mount(<CSClock timezone='Etc/UTC'/>);
		expect(wrapper.find('.cs-element-title').text()).toBe('12:00');
		Date.now.mockReturnValue(new Date('2017-06-12T12:01'));
		jest.runTimersToTime(60e3);
		expect(wrapper.find('.cs-element-title').text()).toBe('12:01');
	});
	it('clears timers at unmount', () => {
		const wrapper = mount(
			<CSClock />
		);
		wrapper.unmount();
		expect(clearInterval).toHaveBeenCalled();
	});
});
