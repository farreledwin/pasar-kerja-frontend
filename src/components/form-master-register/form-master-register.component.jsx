import React, { useState, useEffect } from 'react';
import DropDownRegister from '../dropdown-register/dropdown-register.component';
import { startRegisterUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const FormMasterRegister = ({ RegisterUser }) => {
	const [ userData, setUserData ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});
	const { firstName, lastName, email, password } = userData;
	const handleChange = async (event) => {
		const { value, name } = event.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleDone = async (event) => {
		event.preventDefault();
		RegisterUser(firstName, lastName, email, password);
	};
	return (
		<form onSubmit={handleDone}>
			<DropDownRegister
				currentStep={userData.currentStep}
				handleChange={handleChange}
				firstName={userData.firstName}
				lastName={userData.lastName}
				email={userData.email}
				password={userData.password}
			/>
		</form>
	);
};
const mapDispatchToProps = (dispatch) => ({
	RegisterUser: (firstName, lastName, email, password) =>
		dispatch(
			startRegisterUser({
				firstName,
				lastName,
				email,
				password
			})
		)
});
export default connect(null, mapDispatchToProps)(FormMasterRegister);
