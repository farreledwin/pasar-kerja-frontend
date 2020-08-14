import React from 'react';

import './sort-dropdown.styles.scss';

const SortDropDown = ({ onChange }) => (
	<div className="sort-dropdown__section">
		<div className="sort-dropdown__text">
			<button onClick={onChange} value="clear">
				Clear
			</button>
		</div>
		<div className="sort-dropdown__text">
			<button onClick={onChange} value="highest_rating">Highest Rating</button>
		</div>
		<div className="sort-dropdown__text">
			<button onClick={onChange} value="newest">Newest</button>
		</div>
		<div className="sort-dropdown__text">
			<button onClick={onChange} value="highest_price">Highest Price</button>
		</div>
		<div className="sort-dropdown__text">
			<button onClick={onChange} value="lowest_price">Lowest Price</button>
		</div>
	</div>
);
export default SortDropDown;
