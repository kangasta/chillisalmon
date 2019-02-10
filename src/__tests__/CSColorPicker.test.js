import React from 'react';
import { mount } from 'enzyme';

import { CSColorPicker } from '../ChilliSalmon';

describe('CSColorPicker', () => {
	it('renders without crashing', () => {
		mount(<CSColorPicker/>);
	});
	it('calls provided callback on change', () => {
		const callback = jest.fn();
		const wrapper = mount(<CSColorPicker initialColor={{R: 255, G: 255, B: 255}} onChange={callback}/>);
		wrapper.find('.CSColorSlider.R').simulate('change', {target: {name: 'R', value: '0'}});
		expect(callback).toHaveBeenCalledWith({R: 0, G: 255, B: 255});
	});
	it('has default callback for onChange', () => {
		const wrapper = mount(<CSColorPicker initialColor={{R: 255, G: 255, B: 255}}/>);
		wrapper.find('.CSColorSlider.R').simulate('change', {target: {name: 'R', value: '0'}});
	});
	it('supports HSL colors', () => {
		const wrapper = mount(<CSColorPicker initialColor={{H: 180, S: 100, L: 50}}/>);

		expect(wrapper.find('.CSColorSlider.H').matchesElement(<input type='range' min='0' max='360'/>));
		['S', 'L'].forEach(component => {
			expect(wrapper.find('.CSColorSlider.' + component).matchesElement(<input type='range' min='0' max='100'/>));
		});
	});
});
