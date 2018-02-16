import React, { Component } from 'react';
import './App.css';

import {
	CSBackground,
	CSCentered,
	CSClock,
	CSError,
	CSInline,
	CSIntervalChanger,
	CSLoading,
	CSList,
	CSMessage,
	CSStatus,
	CSSubElement,
	CSSymbols,
	CSTitle
} from 'chillisalmon';

class App extends Component {
	render() {
		return (
			<div className="app">
				<CSCentered className='app-main'>
					<CSTitle className='app-title'>Inline elements</CSTitle>
					<CSInline>
						<CSClock className='app-box' timezone='America/New_York'/>
						<CSClock className='app-box'/>
						<CSClock className='app-box' timezone='Asia/Shanghai'/>
					</CSInline>
					<CSTitle className='app-title'>Changer and List element</CSTitle>
					<CSList>
						<CSIntervalChanger interval={3000}>
							<CSLoading className='app-box'>This will take forever</CSLoading>
							<CSError className='app-box'>Might be bork</CSError>
							<CSMessage className='app-box' title='Not broken'>This is just a feature</CSMessage>
						</CSIntervalChanger>
					</CSList>
					<CSTitle className='app-title'>Status elements</CSTitle>
					<CSList>
						<CSStatus className='app-box' status={CSStatus.OFF} title='Status'>Status: Off</CSStatus>
						<CSStatus className='app-box' status={CSStatus.ON} title='Status'>Status: On</CSStatus>
						<CSStatus className='app-box' status={CSStatus.OK} right={[1,2,3,4,5].map((a)=>(<CSSubElement head={CSSymbols.Ok} title={a}/>))} title='Status'>Status: Ok</CSStatus>
						<CSStatus className='app-box' status={CSStatus.WARN} title='Status'>Status: Warning</CSStatus>
						<CSStatus className='app-box' status={CSStatus.ERR} title='Status'>Status: Error</CSStatus>
						<CSStatus className='app-box' status={CSStatus.LOAD} title='Status'>Status: Loading</CSStatus>
						</CSList>
					<CSTitle/>
				</CSCentered>
				<CSBackground className='app-bg'/>
			</div>
		);
	}
}

export default App;
