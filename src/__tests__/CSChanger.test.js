import React from 'react';
import { mount } from 'enzyme';

import { CSChanger } from '../ChilliSalmon';

describe('CSChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSChanger>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</CSChanger>);
	});
});
