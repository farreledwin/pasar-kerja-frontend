import React, { useEffect } from 'react';
import LeftBanner from '../../components/left-banner/left-banner.component';
import Header from '../../components/new/header/header.component';
import './homepage.styles.scss';
import TextBannerRight from '../../components/text-banner-right/text-banner-right.component';
import GalleryCategoryHome from '../../components/gallery-category-home/gallery-category-home.component';
import { startFetchJobCategory } from '../../redux/jobcategory/jobcategory.action';
import { connect } from 'react-redux';
const HomePage = ({ startFetchJobCategory }) => {
	useEffect(() => {
		startFetchJobCategory();
	});
	return (
		
		<div className="homepage__section">
			<div className="row">
				<div className="col-sm-4 banner-image__all">
					<LeftBanner />
				</div>
				<div className="col-sm-6 header-section__menu--content-flex">
					<Header />
					<TextBannerRight />
				</div>
			</div>
			<div className="content-after-header__section">
				<h3>Worker Categories</h3>
				<GalleryCategoryHome />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startFetchJobCategory: () => dispatch(startFetchJobCategory())
});

export default connect(null, mapDispatchToProps)(HomePage);
