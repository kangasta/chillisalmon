import React from 'react';
import { mount } from 'enzyme';

import { CSVerticalSplit } from '../ChilliSalmon';

describe('CSVerticalSplit', () => {
	it('renders without crashing', () => {
		mount(<CSVerticalSplit/>);
	});
});
