import React from 'react';
import './button-contract.styles.scss';

const ButtonContract = ({ value, text, ...otherProps }) => (
	<div className="recommended-job__btn">
		<button type="button" name="contractJob" value={value} {...otherProps} className="btn btn-outline-secondary">
			{text}
		</button>
	</div>
);

export default ButtonContract;
