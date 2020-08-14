import React, { useState } from 'react';
import './dropdown-register.styles.scss';
import FormInput from '../form-input/form-input.component';
import AlreadyRegisteredOrNot from '../already-registered-or-not/already-registered-or-not.component';


const DropDownRegister = (props) => {
	return (
		<div className="dropdown-menu__register">
			<div className="dropdown-menu__register__forminput__row">
				<FormInput type="text" onChange={props.handleChange} name="firstName" placeholder="firstname" />
				<FormInput type="text" onChange={props.handleChange} name="lastName" placeholder="lastname" />
			</div>
			<div className="dropdown-menu__register__forminput__column">
				<FormInput type="email" onChange={props.handleChange} name="email" placeholder="email" />
				<FormInput type="password" onChange={props.handleChange} name="password" placeholder="password" />
				<span id="eye" toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />{' '}
				<FormInput type="submit" name="daftar" value="DAFTAR" />
			</div>
			<AlreadyRegisteredOrNot type="login" />
		</div>
	);
};

// const mapStateToProps = createStructuredSelector({
// 	hiddenFormJobRecommended: selectUserRecommendedJobDropDown
// });

// const mapDispatchToProps = (dispatch) => ({
// 	setRecommendedJobDropDown: () => dispatch(setRecommendedJobDropDown())
// });
export default DropDownRegister;
