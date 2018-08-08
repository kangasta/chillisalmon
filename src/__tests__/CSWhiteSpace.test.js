import React from 'react';
import { mount } from 'enzyme';

import { CSWhiteSpace } from '../ChilliSalmon';

describe('CSWhiteSpace', () => {
	it('renders without crashing', () => {
		mount(<CSWhiteSpace/>);
	});
});
