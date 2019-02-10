import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/CSColorPicker.css';

class CSColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = props.initialColor;

		this.onChange = this.onChange.bind(this);
	}

	static rgb2str(rgb) {
		const values = ['R', 'G', 'B']
			.map(component => rgb[component].toString())
			.join(', ');
		return 'rgb(' + values + ')';
	}

	static hsl2str(hsl) {
		const hue = hsl.H.toString();
		const values = ['S', 'L']
			.map(component => hsl[component].toString() + '%')
			.join(', ');
		return 'hsl(' + hue + ', ' + values + ')';
	}

	static getMaxValue(component) {
		switch(component) {
		case 'H':
			return 360;
		case 'S':
		case 'L':
			return 100;
		default:
			return 255;
		}
	}

	static getComponents(color) {
		if (color.hasOwnProperty('R') && color.hasOwnProperty('R') && color.hasOwnProperty('R')) {
			return ['R', 'G', 'B'];
		}
		if (color.hasOwnProperty('H') && color.hasOwnProperty('S') && color.hasOwnProperty('L')) {
			return ['H', 'S', 'L'];
		}
		return null;
	}

	static color2str(color) {
		if (CSColorPicker.getComponents(color).join('') == 'RGB') {
			return CSColorPicker.rgb2str(color);
		}
		if (CSColorPicker.getComponents(color).join('') == 'HSL') {
			return CSColorPicker.hsl2str(color);
		}
		return null;
	}

	onChange(event) {
		const change = {[event.target.name]: Number(event.target.value)};
		this.props.onChange(Object.assign({}, this.state, change));
		this.setState(change);
	}

	getGradientStr(component) {
		var gradient = {
			min: Object.assign({}, this.state),
			max: Object.assign({}, this.state)
		};
		gradient.min[component] = 0;
		gradient.max[component] = CSColorPicker.getMaxValue(component);

		var colors;
		if (component === 'H') {
			colors = [...Array(11).keys()]
				.map(step => CSColorPicker.color2str(Object.assign({}, gradient.max, {H: gradient.max.H * step / 10})))
				.join(', ');
		} else if(component === 'L') {
			colors = [...Array(3).keys()]
				.map(step => CSColorPicker.color2str(Object.assign({}, gradient.max, {L: gradient.max.L * step / 2})))
				.join(', ');
		} else {
			colors = CSColorPicker.color2str(gradient.min) + ', ' + CSColorPicker.color2str(gradient.max);
		}

		return 'linear-gradient(to right, ' + colors + ')';
	}

	getSlider(component) {
		return (
			<div key={component} className={'CSColorComponent ' + component}>
				<input
					className={'CSColorSlider ' + component}
					type='range'
					min='0'
					max={CSColorPicker.getMaxValue(component).toString()}
					value={this.state[component].toString()}
					name={component}
					onChange={this.onChange}
					style={{background: this.getGradientStr(component)}}/>
			</div>
		);
	}

	render() {
		return (
			<div className={'CSColorPicker ' + this.props.className} style={{background: CSColorPicker.color2str(this.state)}}>
				{CSColorPicker.getComponents(this.state).map(component => this.getSlider(component))}
			</div>
		);
	}
}

CSColorPicker.defaultProps = {
	className: '',
	initialColor: {
		R: 128,
		G: 128,
		B: 128,
	},
	onChange: () => undefined,
};

CSColorPicker.propTypes = {
	className: PropTypes.string,
	initialColor: PropTypes.oneOfType([
		PropTypes.shape({
			R: PropTypes.number,
			G: PropTypes.number,
			B: PropTypes.number,
		}),
		PropTypes.shape({
			H: PropTypes.number,
			S: PropTypes.number,
			L: PropTypes.number,
		}),
	]),
	onChange: PropTypes.func,
};

export default CSColorPicker;