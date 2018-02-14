import React from 'react';
import { mount } from 'enzyme';

import CSDivWrapper from '../utils/CSDivWrapper';

describe('CSDivWrapper', () => {
	it('renders without crashing', () => {
		mount(<CSDivWrapper/>);
	});
});
