import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header-type-3.styles.scss';
import { setToogleDropDown, setToogleRegisterDropDown } from '../../redux/user/user.actions';
import { selectUserDropDown, selectUserRegisterDropDown, selectUserData } from '../../redux/user/user.selectors';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-mini-transparent.png';
import MenuButton from '../../assets/menu-button.png';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import DropDownLogout from '../dropdown-logout/dropdown-logout.component';

const HeaderType3 = () => {
	const [ statusDropDownLogout, setDropDownLogout ] = useState(false);
	const logoutDropDownStatus = () => {
		setDropDownLogout(!statusDropDownLogout);
	};
	return (
		<div className="headertype3">
			<div className="headertype3__menu">
					<div className="headertype3__menu-list">
							<div className="headertype3__menu-list-left">
								<img className="headertype3__menu-list-img" src={Logo}></img>
								<a href="/" className="headertype3__menu-list-item">Find Worker</a>
								<a href="/" className="headertype3__menu-list-item">Be a Worker</a>
								<a href="/" className="headertype3__menu-list-item">Work orders</a>
							</div>

							<div className="headertype3__menu-list-right">
								<div>
									<a href="/" className="headertype3__menu-list-item">Profile</a>
									<img className="headertype3__menu-list-right-img" src={CoffeeFill}></img>
								</div>
								<button className="headertype3__menu-list-btn" onClick={logoutDropDownStatus}><img src={MenuButton}></img></button>
								{statusDropDownLogout === true ? <DropDownLogout /> : null}
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
