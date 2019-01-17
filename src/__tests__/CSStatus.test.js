import React from 'react';
import { mount } from 'enzyme';

import { CSStatus } from '../ChilliSalmon';

describe('CSStatus', () => {
	it('renders without crashing', () => {
		mount(<CSStatus/>);
	});
});
