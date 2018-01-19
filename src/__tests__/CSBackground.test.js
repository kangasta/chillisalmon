import React from 'react';
import { mount } from 'enzyme';

import { CSBackground } from '../ChilliSalmon';

describe('CSBackground', () => {
	it('renders without crashing', () => {
		mount(<CSBackground/>);
	});
});
