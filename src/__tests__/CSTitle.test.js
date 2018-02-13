import React from 'react';
import { mount } from 'enzyme';

import { CSTitle } from '../ChilliSalmon';

describe('CSTitle', () => {
	it('renders without crashing', () => {
		mount(<CSTitle/>);
	});
});
