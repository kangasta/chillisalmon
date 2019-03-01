import React from 'react';
import { mount } from 'enzyme';

import { CSValidatorChanger } from '../ChilliSalmon';

describe('CSValidatorChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSValidatorChanger><div/><div/></CSValidatorChanger>
		);
	});
	it('renders error when one is given', () => {
		const wrapper = mount(<CSValidatorChanger error='Test error'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').exists('.Error')).toBe(true);
	});
	it('renders error when multiple states are given', () => {
		const wrapper = mount(<CSValidatorChanger error='Test error' loading='Test loading' success='Test success'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').exists('.Error')).toBe(true);
	});
	it('renders loading when one is given', () => {
		const wrapper = mount(<CSValidatorChanger loading='Test loading'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').exists('.Loading')).toBe(true);
	});
	it('renders success when one is given', () => {
		const wrapper = mount(<CSValidatorChanger success='Test success'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').exists('.Success')).toBe(true);
	});
	it('renders child when no error or loading or success is given', () => {
		const wrapper = mount(<CSValidatorChanger><div className='Test Child'/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').exists('.Test.Child')).toBe(true);
	});
	it('allows adding custom class to status components', () => {
		const wrapper = mount(<CSValidatorChanger statusClass='TestClass' error='Test Error'><div/></CSValidatorChanger>);
		expect(wrapper.exists('.cs-changer-item-active .Error.TestClass')).toBe(true);
	});
});
