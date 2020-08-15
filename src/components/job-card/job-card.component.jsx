import React from 'react';
import './job-card.styles.scss';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import moment from 'moment';
import { Link } from 'react-router-dom';
const JobCard = ({job}) => {
    console.log(job);
	return (
		<Link to={`job-detail/${job._id}`}>
			<div className="jobCard">
				<img className="jobCard__img" src={job.job_image} />
				<div className="jobCard__detail">
					<h6 className="jobCard__detail-jobtype">{job.job_name}</h6>
					<h3 className="jobCard__detail-jobsalary">Rp {job.salary} per hari</h3>
					<p className="jobCard__detail-jobdesc">{job.job_description}</p>
				</div>
				<div className="jobCard__info">
					<div className="jobCard__info-rating">
						<div className="jobCard__info-rating--star-container">
							<img className="jobCard__info-rating--star" src={RatingActive} />
							<img className="jobCard__info-rating--star" src={RatingActive} />
							<img className="jobCard__info-rating--star" src={RatingActive} />
							<img className="jobCard__info-rating--star" src={RatingActive} />
							<img className="jobCard__info-rating--star" src={RatingPassive} />
						</div>
						<p className="jobCard__info-rating--text">{job.job_review}</p>
					</div>

					<button className="btn btn-outline-info">
						{job.job_category} <img className="btn-logo" src={CheffHat} />
					</button>
				</div>
			</div>
		</Link>
	);
};

export default JobCard;
