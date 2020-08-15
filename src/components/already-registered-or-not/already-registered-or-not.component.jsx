import React from 'react';
import './already-registered-or-not.styles.scss';

const AlreadyRegisteredOrNot = ({ type }) => (
	<div className="dropdown-menu__registered-or-not">
		{type === 'register' ? (
			<p>
				<strong>Not registered yet?</strong> <a href="#">Register</a>
			</p>
		) : (
			<p>
				<strong>Already have an account</strong> <a href="#">Login</a>
			</p>
		)}
	</div>
);

export default AlreadyRegisteredOrNot;
