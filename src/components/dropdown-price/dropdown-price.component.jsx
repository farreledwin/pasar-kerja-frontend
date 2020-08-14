import React from 'react';

import './dropdown-price-styles.scss';

const marginModify = {
	position: 'relative',
	top: '1em',
	right: '1em'
};

const colorChange = {
	color: '#1A3E60'
};

const modifyFontWeight = {
	fontWeight: 'normal'
};

const DropDownPrice = ({ onChange, isOpen,value }) => (
	<div className="price-dropdown__section">
		<div className="price-dropdown__content">
			<div className="price-dropdown__title text-center">
				<p style={colorChange}>Price per day</p>
			</div>
			<div className="price-dropdown__price">
				<div className="price-dropdown__price--minprice">
					<div className="price-dropdown__price--textmin">
						<p style={modifyFontWeight}>Min Price</p>
					</div>
					<div className="price-dropdown__price--inputmin">
						Rp.<input type="text" name="minprice" onChange={onChange} value={value.start_price} placeholder="" />
					</div>
				</div>
				<div className="price-dropdown__price--symbol" style={marginModify}>
					<div className="price-dropdown__price--minus">
						<p>-</p>
					</div>
				</div>
				<div className="price-dropdown__price--maxprice">
					<div className="price-dropdown__price--textmax">
						<p style={modifyFontWeight}>Max Price</p>
					</div>
					<div className="price-dropdown__price--inputmax">
						Rp.<input type="text" name="maxprice" onChange={onChange} value={value.end_price} placeholder="" />
					</div>
				</div>
			</div>
			<div className="price-dropdown__button">
				<div className="price-dropdown__button--clearbtn">
					<a onClick={onChange} href="#">
						Clear
					</a>
				</div>
				<div className="price-dropdown__button--savebtn">
					<input type="submit" onClick={isOpen} name="savebtn" value="Save" />
				</div>
			</div>
		</div>
	</div>
);

export default DropDownPrice;
