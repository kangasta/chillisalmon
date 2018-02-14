import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSChanger.css';

class CSChanger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: props.active,
			isChanging: true
		};
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				isChanging: false
			});
		},50);
	}

	componentWillReceiveProps(next) {
		if (next.active === this.state.active) return;

		// Hide current item
		this.setState({isChanging: true},()=>{
			// Change active element after 250ms
			setTimeout(()=>{
				this.setState({
					active: next.active
				});
			},250);
		});
		// Show next item after 300 ms
		setTimeout(()=>{
			this.setState({
				isChanging: false
			});
		},300);
	}

	getActiveClass(i) {
		return (i === this.state.active ? ' cs-changer-item-active ' : ' cs-changer-item-inactive ');
	}

	getVisibleClass() {
		return (this.state.isChanging ? ' cs-changer-item-hide ' : ' cs-changer-item-show ');
	}

	render() {
		return (
			<div className='cs-changer'>
				{
					React.Children.map(this.props.children, (child, i) => {
						return (
							<div key={i} className={'cs-changer-item ' + this.getActiveClass(i) + this.getVisibleClass()}>
								{child}
							</div>
						);
					})
				}
			</div>
		);
	}
}

CSChanger.defaultProps = {
	active: 0,
};

CSChanger.propTypes = {
	active:		PropTypes.number,
	children:	PropTypes.arrayOf(PropTypes.node).isRequired
};

export default CSChanger;