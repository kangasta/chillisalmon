import React from 'react';
import { mount } from 'enzyme';

import { CSIntervalChanger } from '../ChilliSalmon';

describe('CSIntervalChanger', () => {
	it('renders without crashing', () => {
		mount(
			<CSIntervalChanger>
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</CSIntervalChanger>);
	});
});
