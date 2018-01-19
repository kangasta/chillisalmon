import React from 'react';
import { mount } from 'enzyme';

import { CSLoading } from '../ChilliSalmon';

describe('CSLoading', () => {
	it('renders without crashing', () => {
		mount(<CSLoading/>);
	});
});
