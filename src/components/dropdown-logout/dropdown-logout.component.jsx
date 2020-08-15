import React, { useState } from 'react';
import './dropdown-logout.styles.scss';

const DropDownLogout = () => {
	return (
		<div className="dropdownlogout">
			<div className="dropdownlogout__container">
                <a className="dropdownlogout__container-item" href="">Help Center</a>
                <a className="dropdownlogout__container-item" href="">Account Settings </a>
                <hr className="basic-line"></hr>
                <a className="dropdownlogout__container-item" href="">Log out</a>
            </div>
		</div>
	);
};


export default DropDownLogout;
