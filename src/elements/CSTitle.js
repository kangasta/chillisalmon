import React, { Component } from 'react';

import CSDivWrapper from '../utils/CSDivWrapper';

import '../../style/CSTitle.css';

class CSTitle extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-title ' {...this.props}/>
		);
	}
}

export default CSTitle;