import React from 'react';
import { mount, shallow } from 'enzyme';

import { CSExpandable } from '../ChilliSalmon';

describe('CSExpandable', () => {
	it('renders without crashing', () => {
		mount(
			<CSExpandable>
				<p>1</p>
			</CSExpandable>);
	});
	it('expands on click', () => {
		var wrapper = shallow(
			<CSExpandable>
				<p>1</p>
			</CSExpandable>
		);

		expect(wrapper.exists('.Content.Hidden')).toBe(true);
		expect(wrapper.exists('.Content.Expanded')).toBe(false);

		wrapper.find('.Icon').simulate('click');
		wrapper.update();

		expect(wrapper.exists('.Content.Hidden')).toBe(false);
		expect(wrapper.exists('.Content.Expanded')).toBe(true);
	});
	it('allows custom icon', () => {
		var wrapper = shallow(
			<CSExpandable icon={<span className='Test'></span>}>
				<p>1</p>
			</CSExpandable>
		);

		expect(wrapper.exists('span.Test')).toBe(true);
	});
});
