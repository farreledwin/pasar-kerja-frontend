import React from 'react';
import './text-banner-right.styles.scss';
import HeaderSearchBar from '../header-search-bar/header-search-bar.component';
import PopularJob from '../popular-job/popular-job.component';
import { withRouter } from 'react-router-dom';
const TextBannerRight = ({ location,history }) => {
	console.log(location);
	console.log(history);
	return (
		<div className="text-banner-right__section">
			{location.pathname === '/findworker' ? (
				<p>
					More than <span style={{ color: '#1A3E60' }}>500.000</span>
					<br />worker employed <br />everyday
				</p>
			) : (
				<p>
					Find the <span style={{ color: '#1A3E60' }}>best worker</span>
					<br />for your <br />Business
				</p>
			)}
			{location.pathname === '/findworker' ? (
				<input type="submit" class="becomeworker-btn" value="Become a worker" />
			) : (
				<HeaderSearchBar />
			)}
			<PopularJob />
		</div>
	);
};

export default withRouter(TextBannerRight);
