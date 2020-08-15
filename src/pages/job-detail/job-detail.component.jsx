import React, { useEffect, useState } from 'react';
import './job-detail.styles.scss';
import JobDetailCardMain from '../../components/jobdetail-card-main/jobdetail-card-main.component';
import JobDetailCardSecondary from '../../components/jobdetail-card-secondary/jobdetail-card-secondary.component';
import JobDetailReview from '../../components/jobdetail-review/jobdetail-review.component';
import JobCard from '../../components/job-card/job-card.component';
import { connect } from 'react-redux';
import { startFetchJobDetail, startFetchReview } from '../../redux/joblist/joblist.action';
import { createStructuredSelector } from 'reselect';
import {
	selectAllDataJobDetail,
	selectAllDataJobReview,
	selectIsFetchingReview
} from '../../redux/joblist/joblist.selectors';
import SimiliarJob from '../../components/similiar-job/similiar-job.component';
import LoadingScreen from 'react-loading-screen';
import logoMiniTransparent from '../../assets/logo-mini-transparent.png';
const JobDetail = ({ match, job, startFetchJobDetail, startFetchReview, review, isFetchingReview }) => {
	const id = match.params.jobId;
	useEffect(() => {
		startFetchReview(id);
		startFetchJobDetail(id);
	}, []);
	console.log(isFetchingReview);
	console.log(review);
	return (
		<div>
			{job === null || review === null ? (
				<LoadingScreen
					loading={true}
					bgColor="#f1f1f1"
					spinnerColor="#9ee5f8"
					textColor="#676767"
					logoSrc={logoMiniTransparent}
					text="Loading..Please Wait!"
				/>
			) : (
				<div>
					<div className="jobdetail">
						<div>
							<JobDetailCardMain job={job} />
							<div>
								<JobDetailReview job={job} review={review} />
							</div>
						</div>

						<JobDetailCardSecondary job={job} />
					</div>
					<hr />

					<div>
						<SimiliarJob />
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	job: selectAllDataJobDetail,
	review: selectAllDataJobReview,
	isFetchingReview: selectIsFetchingReview
});

const mapDispatchToProps = (dispatch) => ({
	startFetchJobDetail: (id) => dispatch(startFetchJobDetail({ id })),
	startFetchReview: (id) => dispatch(startFetchReview({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
