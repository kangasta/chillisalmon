import React from 'react';
import { mount } from 'enzyme';

import { CSClock } from '../ChilliSalmon';

describe('CSClock', () => {
	it('renders without crashing', () => {
		mount(
			<CSClock/>);
	});
});
