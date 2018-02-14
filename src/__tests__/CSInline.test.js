import React from 'react';
import { mount } from 'enzyme';

import { CSInline } from '../ChilliSalmon';

describe('CSInline', () => {
	it('renders without crashing', () => {
		mount(<CSInline/>);
	});
});
