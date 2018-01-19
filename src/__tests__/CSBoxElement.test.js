import React from 'react';
import { mount } from 'enzyme';

import { CSBoxElement } from '../ChilliSalmon';

describe('CSBoxElement', () => {
	it('renders without crashing', () => {
		mount(<CSBoxElement/>);
	});
});
