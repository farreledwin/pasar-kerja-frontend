import React from 'react';
import './form-input.styles.scss';
import GoogleSvg from '../../assets/gmail.svg';
import FacebookSvg from '../../assets/facebooks.png';

const submitStyle = {
	backgroundColor: '#3183CD'
};

const googleBtn = {
	backgroundColor: '#D54B3D'
};

const facebookBtn = {
	backgroundColor: '#546791'
};

const skipBtn = {
	backgroundColor: 'white',
	border: '1.5px solid #3183CD',
	color: '#3183CD',
	fontWeight: '500'
};

const FormInput = ({ type, name, placeholder, value, color, handleChange, ...otherProps }) => (
	<div className="form-input">
		{type === 'submit' && name === 'logingoogle' ? (
			<button type={type} style={googleBtn} name={name} placeholder={placeholder}>
				<img src={GoogleSvg} />
				{value}
			</button>
		) : type === 'submit' && name === 'loginfacebook' ? (
			<button type={type} style={facebookBtn} name={name} placeholder={placeholder}>
				<img src={FacebookSvg} />
				{value}
			</button>
		) : type === 'submit' && color === 'white' ? (
			<button type={type} {...otherProps} style={skipBtn} name={name} placeholder={placeholder}>
				{value}
			</button>
		) : type === 'submit' ? (
			<button type={type} style={submitStyle} name={name} placeholder={placeholder} {...otherProps}>
				{value}
			</button>
		) : (
			<input type={type} name={name} onChange={handleChange} {...otherProps} placeholder={placeholder} />
		)}
	</div>
);

export default FormInput;
