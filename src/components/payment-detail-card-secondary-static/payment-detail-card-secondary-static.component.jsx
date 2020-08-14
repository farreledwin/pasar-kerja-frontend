import React, { useEffect } from 'react';
import './payment-detail-card-secondary-static.styles.scss';
import CoffeeFill from '../../assets/after-jobdetailpage/coffee-fill.jpg';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllDataJobDetail } from '../../redux/joblist/joblist.selectors';
const PaymentDetailCardSecondaryStatic = (props) => {
	return (
		<div>
			{props.job === null || props.data === null ? (
				<p>loading</p>
			) : (
				<div className="paymentdetail--card-secondary">
					<img src={CoffeeFill} className="paymentdetail--card-secondary__img" />

					<div className="paymentdetail--card-secondary__title">
						<h3>{props.job.job_name}</h3>
						<p>
							{props.job.job_time_range}
							<span className="circle">
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
							{props.job.job_hour}
							<span className="circle">
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
							<button className="btn btn-outline-info">
								Koki <img className="btn-logo" src={CheffHat} />
							</button>
						</p>
					</div>

					<div className="paymentdetail--card-secondary__date">
						<div className="paymentdetail--card-secondary__date-container">
							<p className="paymentdetail--card-secondary__date--text bold">From</p>
							<p className="paymentdetail--card-secondary__date--text-2">{props.data.dateFrom}</p>
						</div>
						<hr className="basic-line" />
						<div className="paymentdetail--card-secondary__date-container">
							<p className="paymentdetail--card-secondary__date--text bold">Until</p>
							<p className="paymentdetail--card-secondary__date--text-2">{props.data.dateUntil}</p>
						</div>
					</div>

					<div className="paymentdetail--card-secondary__note">
						<div className="paymentdetail--card-secondary__note-container">
							<p className="bold">Note :</p>
							<p className="note-paragraph">{props.data.note}</p>
						</div>
					</div>

					<div className="paymentdetail--card-secondary__price">
						<div className="paymentdetail--card-secondary__price-container">
							<p className="paymentdetail--card-secondary__price-description">
								{props.job.salary} x {props.data.manyDay} day
							</p>

							<p className="paymentdetail--card-secondary__price-semitotal">
								{props.job.salary * props.data.manyDay}
							</p>
						</div>

						<div className="paymentdetail--card-secondary__price-container">
							<p className="paymentdetail--card-secondary__price-description">Admin Fees</p>

							<p className="paymentdetail--card-secondary__price-semitotal">Rp.50.000</p>
						</div>

						<hr />

						<div className="paymentdetail--card-secondary__price-container">
							<p className="paymentdetail--card-secondary__price-description bold">Total</p>
							<p className="paymentdetail--card-secondary__price-total bold">{props.data.total_price}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	job: selectAllDataJobDetail
});

export default connect(mapStateToProps)(PaymentDetailCardSecondaryStatic);
