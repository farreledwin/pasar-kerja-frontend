import React from 'react';
import './activejob-detailcompany.styles.scss';
import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ActiveJobDetailCompany = (job) => {
	return (
		<Link to={`job-detail/${job.job._id}`}>
		<div className="activejob">
			<div className="activejob__card">
				<div className="card" style={{ width: '320px' }}>
					<Carousel>
						<Carousel.Item>
							<img className="d-block w-100 br-15" src={job.job.job_image} alt="First slide" />
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 br-15"
								src="https://industry.socs.binus.ac.id/learning-plan/assets/images/default.png"
								alt="First slide"
							/>
						</Carousel.Item>
					</Carousel>
					<div className="activejob__card__part-time-button">
						<button type="button" className="btn btn-secondary">
							{job.job.contract_name}
						</button>
					</div>
					<div className="activejob__card__two-button">
						<div className="activejob__card__first-button">
							<button type="submit" className="btn btn-primary">
								<i className="fa fa-clock-o" aria-hidden="true" /> {job.job.start_time}
							</button>
						</div>
						<div className="activejob__card__second-button">
							<button type="submit" className="btn btn-primary">
								{job.job.experience_job === 'Required' ? 'Berpengalaman' : 'Tanpa Pengalaman'}
							</button>
						</div>
					</div>
					<div className="activejob__card__salary">
						<p> Rp.{job.job.salary_start} Per bulan</p>
					</div>
					<div className="card-body">
						<h1 className="card-title">{job.job.job_name}</h1>
						<p className="card-text">{job.job.job_description}</p>
					</div>
					<div className="activejob__location-and-time">
						<div className="activejob__location">
							<i className="fa fa-map-marker" aria-hidden="true" /> {job.job.job_district}
						</div>
						<div className="activejob__location">
							<p>{moment(job.job.created_at).format('YYYY/MM/DD')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Link>
	);
};
export default ActiveJobDetailCompany;
