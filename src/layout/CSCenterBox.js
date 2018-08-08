import React, { Component } from 'react';

import CSDivWrapper from '../utils/CSDivWrapper';

import '../../style/CSCenterBox.css';

class CSCenterBox extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-box cs-center-box ' {...this.props}/>
		);
	}
}

export default CSCenterBox;
