import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header-type-3.styles.scss';
import { setToogleDropDown, setToogleRegisterDropDown } from '../../redux/user/user.actions';
import { selectUserDropDown, selectUserRegisterDropDown, selectUserData } from '../../redux/user/user.selectors';
import DropDownLogin from '../dropdown-login/dropdown-login.component';
import OnOutsiceClick from 'react-outclick';
import FormMasterRegister from '../form-master-register/form-master-register.component';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-mini-transparent.png';
import MenuButton from '../../assets/menu-button.png';
import CoffeeFill from '../../assets/coffee-fill.jpg';

const HeaderType3 = ({ hidden, hiddenRegister, setToggleRegisterDropDown, setToogleDropDown, userData, location }) => {
	console.log(location);
	return (
		<div className="header">
			<div className="header__menu">
					<div className="header__menu-list">
							<div className="header__menu-list-left">
								<img className="header__menu-list-img" src={Logo}></img>
								<a href="/" className="header__menu-list-item">Find Worker</a>
								<a href="/" className="header__menu-list-item">Be a Worker</a>
								<a href="/" className="header__menu-list-item">Work orders</a>
							</div>

							<div className="header__menu-list-right">
								<div>
									<a href="/" className="header__menu-list-item">Profile</a>
									<img className="header__menu-list-right-img" src={CoffeeFill}></img>
								</div>
								<button className="header__menu-list-btn"><img src={MenuButton}></img></button>
							</div>
					</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	hidden: selectUserDropDown,
	hiddenRegister: selectUserRegisterDropDown,
	userData: selectUserData
});

const mapDispatchToProps = (dispatch) => ({
	setToogleDropDown: () => dispatch(setToogleDropDown()),
	setToggleRegisterDropDown: () => dispatch(setToogleRegisterDropDown())
});

const showLocationWithRouter = withRouter(HeaderType3);

export default connect(mapStateToProps, mapDispatchToProps)(showLocationWithRouter);
