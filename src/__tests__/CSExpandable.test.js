import React from 'react';
import { mount } from 'enzyme';

import { CSExpandable } from '../ChilliSalmon';

describe('CSExpandable', () => {
	it('renders without crashing', () => {
		mount(
			<CSExpandable>
				<p>1</p>
			</CSExpandable>);
	});
});
