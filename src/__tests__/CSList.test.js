import React from 'react';
import { mount } from 'enzyme';

import { CSList } from '../ChilliSalmon';

describe('CSList', () => {
	it('renders without crashing', () => {
		mount(<CSList/>);
	});
});
