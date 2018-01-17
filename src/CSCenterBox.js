import React, { Component } from 'react';

import CSDivWrapper from './CSDivWrapper';

import '../style/CSCenterBox.css';

class CSCenterBox extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-center-box ' {...this.props}/>
		);
	}
}

export default CSCenterBox;
