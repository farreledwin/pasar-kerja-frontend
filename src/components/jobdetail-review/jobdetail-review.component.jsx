import React from 'react';
import './jobdetail-review.styles.scss';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';

const JobDetailReview = (props) => {
	const jobRating = parseInt(props.job.job_rating);
	const reviewRating = parseInt(props.review.review_rating);
	console.log(props);
	return (
		<div className="jobdetail-review">
			<div className="jobdetail-review__title-container">
				<div className="jobdetail-review__title">
					<h3>Review</h3>
					<div className="jobdetail-review__title--rating">
						{Array.from({ length: jobRating }).map(() => (
							<img className="jobdetail-review__title--rating-active" src={RatingActive} />
						))}
						<p>({props.job.job_review}) reviewer</p>
					</div>
				</div>
				<div>
					<h6>
						<a href="" className="jobdetail-review__title--link">
							See all
						</a>
					</h6>
				</div>
			</div>

			<div className="jobdetail-review__list">
				{props.review.map((data) => (
					<div className="jobdetail-review__list-container">
						<div className="jobdetail-review__list-detail">
							<img
								className="jobdetail-review__list-detail--img"
								src="https://media-exp1.licdn.com/dms/image/C5103AQHeecoH0lILHQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=mJ3mdcUvkbXOhX6ws_tDLd9F1o6BG7GM62CHXUXa5P0"
							/>
							<div className="mg-5">
								<h7 className="jobdetail-review__list-detail--name">{data.review_name}</h7>
								<p className="jobdetail-review__list-detail--date">{data.review_date}</p>
							</div>
						</div>
						<p className="jobdetail-review__list-detail--desc">{data.review_desc}</p>
						<div className="jobdetail-review__list-detail--rating">
							{Array.from({ length: parseInt(data.review_rating) }).map(() => (
								<img className="jobdetail-review__title--rating-active" src={RatingActive} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default JobDetailReview;
