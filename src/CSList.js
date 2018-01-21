import React, { Component } from 'react';

import CSDivWrapper from './CSDivWrapper';

import '../style/CSList.css';

class CSList extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-list ' {...this.props}/>
		);
	}
}

export default CSList;
