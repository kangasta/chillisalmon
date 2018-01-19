import React from 'react';
import { mount } from 'enzyme';

import { CSCenterBox } from '../ChilliSalmon';

describe('CSCenterBox', () => {
	it('renders without crashing', () => {
		mount(<CSCenterBox/>);
	});
});
