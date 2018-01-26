import React from 'react';
import { mount } from 'enzyme';

import { CSCentered } from '../ChilliSalmon';

describe('CSCentered', () => {
	it('renders without crashing', () => {
		mount(<CSCentered/>);
	});
});
