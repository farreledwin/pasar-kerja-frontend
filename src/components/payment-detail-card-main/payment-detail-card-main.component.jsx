import React, { useState } from 'react';
import './payment-detail-card-main.styles.scss';
import ModalPayment  from '../modal-payment/modal-payment.component';
import { startBookingJob } from '../../redux/joblist/joblist.action';
import { createStructuredSelector } from 'reselect';
import { selectAllDataJobDetail } from '../../redux/joblist/joblist.selectors';
import { selectUserData } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
const PaymentDetailCardMain = (props) => {
    const { dateFrom, dateUntil, note, manyDay, total_price } = props.data;
    const { _id, job_name } = props.job;
	const { email } = props.user;
	const [ show, setShow ] = useState(false);

	const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = (event) => {
        console.log("masuk");
        event.preventDefault();
        props.startBookingJob(dateFrom, dateUntil, note, manyDay, email, _id, total_price, job_name);
        props.history.push('/payment-detail-time');
	};

	const handleShow = () => setShow(true);
	return (
		<div className="paymentdetail__card-main">
			<div className="paymentdetail__card-main--title">
				<h2>Payment & Confirm Order</h2>
				<h5>Your Work Order</h5>
			</div>

			<div className="paymentdetail__card-main--desc">
				<div className="paymentdetail__card-main--desc-title">
					<h5>Date</h5>
					<a className="paymentdetail__card-main--desc-date-link" href="">
						edit
					</a>
				</div>
				<div className="paymentdetail__card-main__date">
					<div className="paymentdetail__card-main__date-container">
						<p className="paymentdetail__card-main__date--text">From</p>
						<h6>{props.data.dateFrom}</h6>
					</div>
					<hr className="basic-line" />
					<div className="paymentdetail__card-main__date-container">
						<p className="paymentdetail__card-main__date--text">To</p>
						<h6>{props.data.dateUntil}</h6>
					</div>
				</div>

				<hr className="basic-line-2" />

				<div className="paymentdetail__card-main--desc-title">
					<h5>Note</h5>
					<a className="paymentdetail__card-main--desc-note-link" href="">
						edit
					</a>
				</div>

				<div className="paymentdetail__card-main__note">
					<h6>Note :</h6>
					<p>{props.data.note}</p>
				</div>

				<hr className="basic-line-2" />
			</div>

			<div className="paymentdetail__card-main--return">
				<h2>Terms and Conditions</h2>

				<div className="paymentdetail__card-main--return-desc">
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus.Lorem ipsum dolor sit amet, consectetur{' '}
						</p>
						<a href="">Detail</a>
					</div>
					<hr className="basic-line-3" />
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus.Lorem ipsum dolor sit amet, consectetur{' '}
						</p>
						<a href="">Pelajari</a>
					</div>
				</div>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem
					ipsum dolor sit amet, consectetur{' '}
				</p>
			</div>

			<button className="btn btn-primary paymentdetail__card-main--button" onClick={handleShow}>
				Proceed to Payment
			</button>
			<ModalPayment show={show} handleClose={handleClose} handleShow={handleShow} data={props} handleSubmit={handleSubmit} />
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	startBookingJob: (dateFrom, dateUntil, note, manyDay, email, job_id, total_price, job_name) =>
		dispatch(startBookingJob({ dateFrom, dateUntil, note, manyDay, email, job_id, total_price, job_name }))
});
const mapStateToProps = createStructuredSelector({
	job: selectAllDataJobDetail,
	user: selectUserData
});

const PaymentDetailCardRouter = withRouter(PaymentDetailCardMain);

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetailCardRouter);
