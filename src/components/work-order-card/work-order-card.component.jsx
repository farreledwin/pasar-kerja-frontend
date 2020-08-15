import React from 'react';
import './work-order-card.styles.scss';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';
import MiniProfileCard from '../mini-profile-card/mini-profile-card.component';
import moment from 'moment';

const WorkOrderCard = ({ data }) => {
	console.log(data);
	return (
		<div className="workordercard">
			<div className="workordercard__status">{data.status_order === '1' ? <h5>New Order</h5> : <h5>...</h5>}</div>

			<div className="workordercard__detail">
				<div className="row">
					<div className="col-md-6">
						<div className="workordercard__detail-info">
							<img src={CoffeeFill} className="workordercard__detail-info-img" />
							<div className="workordercard__detail-info-title">
								<h2>{data.job.job_name}</h2>
								<button className="workordercard__btn">
									<span className="workordercard__btn-text text-wrap">{data.job.job_category} </span>
									<img className="workordercard__btn-logo" src={CheffHat} />
								</button>
								<p>
									{data.job.job_time_range}
									<span class="pad-5">
										<svg
											width="5"
											height="5"
											viewBox="0 0 5 5"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="2.5" cy="2.5" r="2.5" fill="black" />
										</svg>
									</span>
									{data.job.job_hour}
								</p>
							</div>

							<div className="workordercard__price">
								<div className="workordercard__price-container">
									<p className="workordercard__price-description">
										Rp.{data.job.salary} x
										{moment
											.duration(
												moment(data.until_date, 'YYYY-MM-DD').diff(
													moment(data.from_date, 'YYYY-MM-DD')
												)
											)
											.asDays()}{' '}
										hari
									</p>

									<p className="workordercard__price-semitotal">
										Rp{' '}
										{data.job.salary *
											moment
												.duration(
													moment(data.until_date, 'YYYY-MM-DD').diff(
														moment(data.from_date, 'YYYY-MM-DD')
													)
												)
												.asDays()}
									</p>
								</div>

								<div className="workordercard__price-container">
									<p className="workordercard__price-description">Biaya Admin</p>
									<p className="workordercard__price-semitotal">Rp.50.000</p>
								</div>

								<hr />

								<div className="workordercard__price-container">
									<p className="workordercard__price-description bold">Total</p>
									<p className="workordercard__price-total bold">
										Rp.{data.job.salary *
											moment
												.duration(
													moment(data.until_date, 'YYYY-MM-DD').diff(
														moment(data.from_date, 'YYYY-MM-DD')
													)
												)
												.asDays() +
											50000}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="workordercard__detail-info">
							<div className="workordercard__detail-info-date">
								<div className="workordercard__detail-info-date-container">
									<p className="workordercard__detail-info-date--text bold">From</p>
									<p className="workordercard__detail-info-date--text-2">{data.from_date}</p>
								</div>
								<hr className="basic-line" />
								<div className="workordercard__detail-info-date-container">
									<p className="workordercard__detail-info-date--text bold">To</p>
									<p className="workordercard__detail-info-date--text-2">{data.until_date}</p>
								</div>
							</div>

							<div className="paymentdetail--card-secondary__note">
								<div className="paymentdetail--card-secondary__note-container">
									<p className="bold">Note :</p>
									<p className="note-paragraph">{data.note}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="workordercard__button-container">
				<div className="workordercard__button-container-main">
					<div className="row">
						<div className="col-md-6">
							<button className="workordercard__button-main-decline">Decline</button>
						</div>

						<div className="col-md-6">
							<button className="workordercard__button-main-accept">Accept</button>
						</div>
					</div>
				</div>

				{/* <div className="workordercard__button-container-secondary">
                        <button className="workordercard__button-secondary-declined">Declined</button>
                    </div>
                    <div className="workordercard__button-container-secondary">
                        <button className="workordercard__button-secondary-accepted">Accepted</button>
                    </div> 

                    <div className="workordercard__button-container-secondary">
                        <button className="workordercard__button-secondary-wip">Work In Progress</button>
                    </div> 

                    <div className="workordercard__button-container-secondary">
                        <button className="workordercard__button-secondary-done">Done</button>
                    </div>  */}
			</div>

			<div className="workordercard__miniprofile-container">
				<MiniProfileCard data={data} />
			</div>
		</div>
	);
};

export default WorkOrderCard;
