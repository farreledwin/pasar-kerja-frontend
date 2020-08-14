import React, { useState } from 'react';
import './header.styles.scss';
import DropDownLogin from '../../components/dropdown-login/dropdown-login.component';
import DropDownRegister from '../form-master-register/form-master-register.component';

const inlinePadding = {
	paddingLeft: '20em'
};

const paddingRegisterLogin = {
	width: '6em'
};

const changeColorText = {
	color: '#1A3E60'
};

const Header = () => {
	const [ statusDropDownLogin, setDropDownLogin ] = useState(false);
	const [ statusDropDownRegister, setDropDownRegister ] = useState(false);

	const loginDropDownStatus = () => {
		setDropDownLogin(!statusDropDownLogin);
		setDropDownRegister(false);
	};

	const registerDropDownStatus = () => {
		setDropDownRegister(!statusDropDownRegister);
		setDropDownLogin(false);
	};
	return (
		<div className="header-section__menu">
			<div className="header-section__menu--content">
				<div className="header-section__menu--item">
					<p>Find Worker</p>
				</div>
				<div className="header-section__menu--item">
					<p style={changeColorText}>Be a worker</p>
				</div>
			</div>
			<div className="header-section__menu--content" style={inlinePadding}>
				<div className="header-section__menu--item" style={paddingRegisterLogin}>
					<a onClick={loginDropDownStatus}>
						<p>Log in</p>
					</a>
				</div>
				{statusDropDownLogin === true ? <DropDownLogin /> : null}
				<div className="header-section__menu--item register">
					<a onClick={registerDropDownStatus}>
						<p>Register</p>
					</a>
				</div>
				{statusDropDownRegister === true ? <DropDownRegister /> : null}
			</div>
		</div>
	);
};

export default Header;
