import React, { Component } from 'react';

import CSDivWrapper from './utils/CSDivWrapper';

import '../style/CSInline.css';

class CSInline extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-inline ' {...this.props}/>
		);
	}
}

export default CSInline;
