import React from 'react';
import './footer.styles.scss';
import LogoImage from '../../assets/logo.png';
import TwitterBlack from '../../assets/homepage/twitter-black.png';
import InstagramBlack from '../../assets/homepage/instagram-black.png';
import FacebookBlack from '../../assets/homepage/facebook-black.png';
const sizeLogo = {
	width: '200px',
	height: '52px'
};

const footerTitle = {
	fontSize: '24px',
	fontWeight: '700'
};
const Footer = () => (
	<div className="footer__section">
		<div className="row">
			<div className="col-sm-4">
				<div className="footer__image">
					<img src={LogoImage} style={sizeLogo} />
				</div>
				<div className="footer__language">
					<select name="language" id="language">
						<option value="Indonesia">Indonesia</option>
					</select>
				</div>
				<div className="footer__follow">
					<div className="footer__follow--text">
						<p>iFollow us on</p>
					</div>
					<div className="footer__follow--icon">
						<img src={TwitterBlack} />
						<img src={InstagramBlack} />
						<img src={FacebookBlack} />
					</div>
				</div>
			</div>
			<div className="col-sm-4">
				<p style={footerTitle}>Category</p>
				<div className="footer__category">
					<div className="footer__category--item">
						<a className="footer__category-link">Beauty</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Food & Beverages</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Nursing</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Construction</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Security</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Waiter & Hospitality</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Retail Serices</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Education</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Fashion</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Customer Support</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Cleaning & Sanitary</a>
					</div>
					<div className="footer__category--item">
						<a className="footer__category-link">Events & Volunteering</a>
					</div>
				</div>
			</div>
			<div className="col-sm-2">
				<div className="jadi-pekerja-pasarkerja__section">
					<div className="jadi-pekerja__title">
						<p style={footerTitle}>Be a worker</p>
					</div>
					<div className="jadi-pekerja__content">
						<a className="footer__category-link">FAQ</a>
						<a className="footer__category-link">Worker help center</a>
						<a className="footer__category-link">Terms & Conditions</a>
						<a className="footer__category-link">Privacy Policy</a>
					</div>
				</div>
			</div>
			<div className="col-sm-2">
				<div className="jadi-pekerja-pasarkerja__section">
					<div className="jadi-pekerja__title">
						<p style={footerTitle}>Pasar Kerja</p>
					</div>
					<div className="jadi-pekerja__content">
						<a className="footer__category-link">About us</a>
						<a className="footer__category-link">Contact us</a>	
						<a className="footer__category-link">Services us</a>
						<a className="footer__category-link">Careers us</a>
						<a className="footer__category-link">Media Centre</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
