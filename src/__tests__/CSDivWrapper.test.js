import React from 'react';
import { mount } from 'enzyme';

import CSDivWrapper from '../CSDivWrapper';

describe('CSDivWrapper', () => {
	it('renders without crashing', () => {
		mount(<CSDivWrapper/>);
	});
});
