import React from 'react';
import { mount } from 'enzyme';

import { CSFooter } from '../ChilliSalmon';

describe('CSFooter', () => {
	it('renders without crashing', () => {
		mount(<CSFooter/>);
	});
});
