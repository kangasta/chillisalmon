import React from 'react';
import { mount } from 'enzyme';

import { CSCalendar } from '../ChilliSalmon';

describe('CSCalendar', () => {
	it('renders without crashing', () => {
		mount(
			<CSCalendar/>);
	});
});
