import React from 'react';
import { mount } from 'enzyme';

import { CSListElement } from '../ChilliSalmon';

describe('CSListElement', () => {
	it('renders without crashing', () => {
		mount(<CSListElement/>);
	});
});
