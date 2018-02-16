import React from 'react';
import { mount } from 'enzyme';

import { CSSubElement } from '../ChilliSalmon';

describe('CSSubElement', () => {
	it('renders without crashing', () => {
		mount(<CSSubElement/>);
	});
});
