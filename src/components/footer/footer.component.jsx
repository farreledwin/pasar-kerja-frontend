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
						<p>ikuti kita di</p>
					</div>
					<div className="footer__follow--icon">
						<img src={TwitterBlack} />
						<img src={InstagramBlack} />
						<img src={FacebookBlack} />
					</div>
				</div>
			</div>
			<div className="col-sm-4">
				<p style={footerTitle}>Kategori</p>
				<div className="footer__category">
					<div className="footer__category--item">
						<p>Kecantikan</p>
					</div>
					<div className="footer__category--item">
						<p>Koki</p>
					</div>
					<div className="footer__category--item">
						<p>Perawat</p>
					</div>
					<div className="footer__category--item">
						<p>Konstruksi</p>
					</div>
					<div className="footer__category--item">
						<p>Keamanan</p>
					</div>
					<div className="footer__category--item">
						<p>Pelayan</p>
					</div>
					<div className="footer__category--item">
						<p>Retail</p>
					</div>
					<div className="footer__category--item">
						<p>Edukasi</p>
					</div>
					<div className="footer__category--item">
						<p>Fashion</p>
					</div>
					<div className="footer__category--item">
						<p>Customer Support</p>
					</div>
					<div className="footer__category--item">
						<p>Kebersihan</p>
					</div>
					<div className="footer__category--item">
						<p>Acara</p>
					</div>
				</div>
			</div>
			<div className="col-sm-2">
				<div className="jadi-pekerja-pasarkerja__section">
					<div className="jadi-pekerja__title">
						<p style={footerTitle}>Jadi Pekerja</p>
					</div>
					<div className="jadi-pekerja__content">
						<p>Lorem</p>
						<p>Lorem</p>
						<p>Lorem</p>
						<p>Lorem</p>
					</div>
				</div>
			</div>
			<div className="col-sm-2">
				<div className="jadi-pekerja-pasarkerja__section">
					<div className="jadi-pekerja__title">
						<p style={footerTitle}>Pasar Kerja</p>
					</div>
					<div className="jadi-pekerja__content">
						<p>Help Center</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
