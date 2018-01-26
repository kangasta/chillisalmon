import React, { Component } from 'react';

import CSDivWrapper from './CSDivWrapper';

import '../style/CSListElement.css';

class CSListElement extends Component {
	render() {
		return (
			<CSDivWrapper addClassName='cs-element cs-list-element ' {...this.props}/>
		);
	}
}

export default CSListElement;
