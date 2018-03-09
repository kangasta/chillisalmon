import React, { Component } from 'react';
import './App.css';

import {
	CSBackground,
	/*CSCentered,*/
	CSClock,
	CSElement,
	CSError,
	CSInline,
	CSIntervalChanger,
	CSLoading,
	CSList,
	CSMessage,
	CSStatus,
	CSSubElement,
	CSSymbols,
	CSTitle,
	CSVerticalSplit
} from 'chillisalmon';

class App extends Component {
	render() {
		return (
			<div className="app">
				<CSVerticalSplit
					left={
						<div>
							<CSTitle className='app-title'>Inline elements</CSTitle>
							<CSInline>
								<CSClock className='app-box' timezone='America/New_York'/>
								<CSClock className='app-box'/>
								<CSClock className='app-box' timezone='Asia/Shanghai'/>
							</CSInline>
							<CSInline>
								<CSElement className='app-box' head={CSSymbols.NIC} title='NIC'>Much packets going through for sure</CSElement>
								<CSElement className='app-box' head={CSSymbols.CPU} title='CPU'>Much processing going on here for sure</CSElement>
							</CSInline>

						</div>
					}
					right={
						<div>
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
								<CSStatus className='app-box' status={CSStatus.OK} right={[1,2,3,4,5].map((a,i)=>(<CSSubElement key={i} head={CSSymbols.Ok} title={a}/>))} title='Status'>Status: Ok</CSStatus>
								<CSStatus className='app-box' status={CSStatus.WARN} title='Status'>Status: Warning</CSStatus>
								<CSStatus className='app-box' status={CSStatus.ERR} title='Status'>Status: Error</CSStatus>
								<CSStatus className='app-box' status={CSStatus.LOAD} title='Status'>Status: Loading</CSStatus>
							</CSList>
							<CSTitle/>
						</div>
					}
				/>
				<CSBackground className='app-bg'/>
			</div>
		);
	}
}

export default App;
