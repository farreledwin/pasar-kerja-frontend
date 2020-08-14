import React, { useState } from 'react';
import './dropdown-login.styles.scss';
import FormInput from '../form-input/form-input.component';
import AlreadyRegisteredOrNot from '../already-registered-or-not/already-registered-or-not.component';
import { startLoginUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const DropDownLogin = ({ startLoginUser }) => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;

	const handleChange = (event) => {
		const { value, name } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		startLoginUser(email, password);
	};

	return (
		<div className="dropdown-menu__login">
			<form onSubmit={handleSubmit}>
				<div className="dropdown-menu__forminput">
					<FormInput type="text" name="email" onChange={handleChange} value={email} placeholder="Email" />
					<FormInput
						type="password"
						name="password"
						onChange={handleChange}
						value={password}
						placeholder="Password"
					/>
					<span id="eye" toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
					<FormInput type="submit" name="loginbtn" value="LOGIN" />
				</div>
			</form>
			<div className="dropdown-menu__seperator">&nbsp;atau&nbsp;</div>
			<div className="dropdown-menu__googlefbbtn">
				<FormInput type="submit" name="logingoogle" value="LOGIN WITH GOOGLE" />
				<FormInput type="submit" name="loginfacebook" value="LOGIN WITH FACEBOOK" />
			</div>
			<AlreadyRegisteredOrNot type="register" />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLoginUser: (email, password) => dispatch(startLoginUser({ email, password }))
});

export default connect(null, mapDispatchToProps)(DropDownLogin);
