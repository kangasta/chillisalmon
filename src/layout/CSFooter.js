import React, { Component } from 'react';

import CSDivWrapper from '../utils/CSDivWrapper';

import '../../style/CSFooter.css';

class CSFooter extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-footer ' {...this.props}/>
		);
	}
}

export default CSFooter;
