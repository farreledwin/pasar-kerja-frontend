import React from 'react';
import './already-registered-or-not.styles.scss';

const AlreadyRegisteredOrNot = ({ type }) => (
	<div className="dropdown-menu__registered-or-not">
		{type === 'register' ? (
			<p>
				<strong>Belum punya akun?</strong> <a href="#">Daftar</a>
			</p>
		) : (
			<p>
				<strong>Sudah punya akun?</strong> <a href="#">Login</a>
			</p>
		)}
	</div>
);

export default AlreadyRegisteredOrNot;
