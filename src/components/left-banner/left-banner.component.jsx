import React from 'react';
import './left-banner.styles.scss';
import LeftImage from '../../assets/homepage/left-image.png';
import LogoImage from '../../assets/logo.png';
import { withRouter } from 'react-router-dom';
const LeftBanner = ({ location }) => {
	console.log(location);
	return (
		<div className="banner-image">
			<div className="banner-image__image">
				<img src={LeftImage} />
			</div>
			<div className="banner-image__logo">
				<img src={LogoImage} />
			</div>
			{location.pathname === '/findworker' ? (
				<div className="banner-image__text-and-button">
					<div className="banner-image__text">
						<h1>
							Are you looking <br />
							for workers?
						</h1>
					</div>
					<div className="banner-image__button">
						<button type="submit">Find workers</button>
					</div>
				</div>
			) : (
				<div className="banner-image__text-and-button">
					<div className="banner-image__text">
						<h1>
							Are you a <br />
							worker?
						</h1>
					</div>
					<div className="banner-image__button">
						<button type="submit">Register as a worker</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default withRouter(LeftBanner);
