import React from 'react';
import { mount } from 'enzyme';

import { CSMessage } from '../ChilliSalmon';

describe('CSMessage', () => {
	it('renders without crashing', () => {
		mount(<CSMessage/>);
	});
});
