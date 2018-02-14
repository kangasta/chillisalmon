import React, { Component } from 'react';

import CSDivWrapper from './utils/CSDivWrapper';

import '../style/CSCentered.css';

class CSCentered extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-centered ' {...this.props}/>
		);
	}
}

export default CSCentered;
