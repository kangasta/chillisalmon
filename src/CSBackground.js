import React, { Component } from 'react';

import CSDivWrapper from './utils/CSDivWrapper';

import '../style/CSBackground.css';

class CSBackground extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-background ' {...this.props}/>
		);
	}
}

export default CSBackground;
