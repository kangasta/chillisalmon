import React from 'react';
import { mount } from 'enzyme';

import { CSValidatorChanger } from '../ChilliSalmon';

jest.useFakeTimers();

describe('CSValidatorChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSValidatorChanger><div/><div/></CSValidatorChanger>
		);
	});
	it('renders error when one is given', () => {
		const wrapper = mount(<CSValidatorChanger error='Test error'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').find('.cs-error').exists()).toBe(true);
	});
	it('renders error when loading and error are given', () => {
		const wrapper = mount(<CSValidatorChanger error='Test error' loading='Test loading'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').find('.cs-error').exists()).toBe(true);
	});
	it('renders loading when one is given', () => {
		const wrapper = mount(<CSValidatorChanger loading='Test loading'><div/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').find('.cs-loading').exists()).toBe(true);
	});
	it('renders child when no error or loading is given', () => {
		const wrapper = mount(<CSValidatorChanger><div className='child'/><div/></CSValidatorChanger>);
		expect(wrapper.find('.cs-changer-item-active')).toHaveLength(1);
		expect(wrapper.find('.cs-changer-item-active').find('.child').exists()).toBe(true);
	});
});
