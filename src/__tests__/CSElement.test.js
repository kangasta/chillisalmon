import React from 'react';
import { mount } from 'enzyme';

import { CSElement } from '../ChilliSalmon';

describe('CSElement', () => {
	it('renders without crashing', () => {
		mount(<CSElement/>);
	});
});
