import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import { setToogleDropDown, setToogleRegisterDropDown } from '../../redux/user/user.actions';
import { selectUserDropDown, selectUserRegisterDropDown, selectUserData } from '../../redux/user/user.selectors';
import DropDownLogin from '../dropdown-login/dropdown-login.component';
import DropDownRegister from '../dropdown-register/dropdown-register.component';
import OnOutsiceClick from 'react-outclick';
import Cookies from 'js-cookie';
import FormMasterRegister from '../form-master-register/form-master-register.component';
import { withRouter } from 'react-router-dom';
import HeaderType2 from '../header-type-2/header-type-2.component';
const Header = ({ hidden, hiddenRegister, setToggleRegisterDropDown, setToogleDropDown, userData, location }) => {
	console.log(location);
	return (
		<div className="header">
			<HeaderType2 />
			<div className="header__menu">
				<ul className="header__menu-list">
					<li>
						<a href="#">Cari Kerja</a>
					</li>
					<li>
						<a href="#">Pasang Iklan</a>
					</li>
					<li>
						{userData.length !== 0 ? <a>Pesanan</a> : <a onClick={setToggleRegisterDropDown}>Daftar</a>}
					</li>
					{hiddenRegister === true ? <FormMasterRegister /> : null}
					{userData.length !== 0 ? null : (
						<li>
							<a onClick={setToogleDropDown}>Masuk</a>
						</li>
					)}
					{userData.length !== 0 ? (
						<div>
							<li>
								<a>
									Profil<span
										className="dot"
										style={{ backgroundImage: `url(${userData.user_image})` }}
									/>
								</a>
							</li>
						</div>
					) : null}

					{hidden === true ? (
						<OnOutsiceClick onOutsideClick={() => setToogleDropDown()}>
							<DropDownLogin />
						</OnOutsiceClick>
					) : null}
				</ul>
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

const showLocationWithRouter = withRouter(Header);

export default connect(mapStateToProps, mapDispatchToProps)(showLocationWithRouter);
