import React from 'react';
import { mount } from 'enzyme';

import { CSError } from '../ChilliSalmon';

describe('CSError', () => {
	it('renders without crashing', () => {
		mount(<CSError/>);
	});
});
