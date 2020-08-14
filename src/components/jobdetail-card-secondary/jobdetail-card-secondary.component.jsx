import React, { useState, useEffect } from 'react';
import './jobdetail-card-secondary.styles.scss';
import moment from 'moment';
import { saveBookingJob } from '../../redux/joblist/joblist.action';
import { connect } from 'react-redux';
import {selectUserData} from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
const JobDetailCardSecondary = (props) => {
	const [ bookingData, setBookingData ] = useState({ dateFrom: '', dateUntil: '', note: '', manyDay: 0,total_price:0 });

    const { dateFrom, dateUntil, note, manyDay,total_price } = bookingData;
    
    const {email} = props.user;
    const job_id = props.job._id;
    const job_name = props.job.job_name;
	const onValueChange = (evt) => {
		setBookingData({ ...bookingData, [evt.target.name]: evt.target.value });
        console.log(bookingData);
        console.log(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.saveBookingJob(dateFrom, dateUntil, note, manyDay, email, job_id,total_price,job_name);
        props.history.push('/payment-detail');
    }

	

	useEffect(
		() => {
			if (dateFrom && dateUntil != '') {
				const start = moment(dateFrom, 'YYYY-MM-DD');
				const end = moment(dateUntil, 'YYYY-MM-DD');
				setBookingData({ ...bookingData, manyDay: moment.duration(end.diff(start)).asDays(),total_price: (props.job.salary * moment.duration(end.diff(start)).asDays()) + 50000 });
				console.log(manyDay);
			}
		},
		[ dateFrom, dateUntil ]
	);
	return (
		<div className="jobdetail--card-secondary">
			<div className="jobdetail--card-secondary__workofhours">
				<h3 className="jobdetail--card-secondary__workofhours-price">Rp.{props.job.salary}/day</h3>
				<h6 className="jobdetail--card-secondary__workofhours-detail">
					<span className="bold">Work Hour :</span> {props.job.job_time_range} ({props.job.job_hour})
				</h6>
			</div>

			<div className="jobdetail--card-secondary__date">
				<div className="jobdetail--card-secondary__date-container">
					<p className="jobdetail--card-secondary__date--text bold">From</p>
					<form>
						<input
							className="jobdetail--card-secondary__date--form"
							onChange={onValueChange}
							name="dateFrom"
							type="date"
						/>
					</form>
				</div>
				<hr className="basic-line" />
				<div className="jobdetail--card-secondary__date-container">
					<p className="jobdetail--card-secondary__date--text bold">Until</p>
					<form>
						<input
							className="jobdetail--card-secondary__date--form"
							onChange={onValueChange}
							name="dateUntil"
							type="date"
						/>
					</form>
				</div>
			</div>

			<div className="jobdetail--card-secondary__note">
				<div className="jobdetail--card-secondary__note-container">
					<p className="bold">Note :</p>
					<textarea
						name="note"
						className="form-control jobdetail--card-secondary__note-form"
						onChange={onValueChange}
						name="note"
						placeholder="Isi di sini..."
					/>
				</div>
			</div>

			<button type="submit" onClick={handleSubmit} className="btn btn-primary jobdetail--card-secondary__button">Pesan</button>

			<div className="jobdetail--card-secondary__price">
				<div className="jobdetail--card-secondary__price-container">
					<p className="jobdetail--card-secondary__price-description">
						{props.job.salary} x {manyDay} day
					</p>

					<p className="jobdetail--card-secondary__price-semitotal">Rp.{props.job.salary * manyDay}</p>
				</div>

				<div className="jobdetail--card-secondary__price-container">
					<p className="jobdetail--card-secondary__price-description">Admin Fees</p>

					<p className="jobdetail--card-secondary__price-semitotal">Rp.50000</p>
				</div>

				<hr />

				<div className="jobdetail--card-secondary__price-container">
					<p className="jobdetail--card-secondary__price-description bold">Total</p>
					<p className="jobdetail--card-secondary__price-total bold">
						Rp.{props.job.salary * manyDay + 50000}
					</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
    user: selectUserData
});

const mapDispatchToProps = (dispatch) => ({
	saveBookingJob: (dateFrom, dateUntil, note, manyDay, email, job_id,total_price,job_name) =>
		dispatch(saveBookingJob({ dateFrom, dateUntil, note, manyDay, email, job_id,total_price,job_name}))
});

const JobDetailCardSecondaryWithRouter = withRouter(JobDetailCardSecondary);

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailCardSecondaryWithRouter);
