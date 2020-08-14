import React from 'react';
import './payment-detail.styles.scss';
import PaymentDetailCardSecondaryStatic from '../../components/payment-detail-card-secondary-static/payment-detail-card-secondary-static.component';
import PaymentDetailCardMain from '../../components/payment-detail-card-main/payment-detail-card-main.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBookingData } from '../../redux/joblist/joblist.selectors';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

const PaymentDetail = ({ dataBooking }) => {
	let history = useHistory();
	return (
		<div>
			{dataBooking === null ? (
				history.goBack()
			) : (
				<div className="paymentdetail">
					<div>
						<PaymentDetailCardMain data={dataBooking} />
					</div>

					<div>
						<PaymentDetailCardSecondaryStatic data={dataBooking} />
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	dataBooking: selectBookingData
});

const PaymentDetailWithRouter = withRouter(PaymentDetail);

export default connect(mapStateToProps, null)(PaymentDetailWithRouter);
