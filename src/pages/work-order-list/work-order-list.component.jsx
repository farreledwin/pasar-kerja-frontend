import React, { useEffect } from 'react';
import './work-order-list.styles.scss';
import WorkServiceFilterCard from '../../components/work-service-filter-card/work-service-filter-card.component';
import WorkOrderCard from '../../components/work-order-card/work-order-card.component';
import WorkOrderFilterCard from '../../components/work-order-filter-card/work-order-filter-card.component';
import { connect } from 'react-redux';
import { startFetchWorkOrder } from '../../redux/booking/booking.action';
import { selectUserData } from '../../redux/user/user.selectors';
import { selectAllCustomerBooking } from '../../redux/booking/booking.selectors';
import { createStructuredSelector } from 'reselect';
const WorkOrderList = ({ startFetchWorkOrder, user, workorder }) => {
	const { email } = user;
	useEffect(
		() => {
			if (user.length !== 0) {
				startFetchWorkOrder(email);
				console.log(workorder);
			}
		},
		[ user ]
	);
	return (
		<div>
			{workorder !== undefined ? (
				<div className="workorderlist">
					<div className="row">
						<div className="col-md-8">
							<h1 className="workorderlist__title">Work Order Card</h1>
							<div className="workorderlist__item">
								{workorder.map((item) => <WorkOrderCard data={item} />)}
							</div>
						</div>

						<div className="col-md-4">
							<WorkOrderFilterCard data={workorder} />
						</div>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectUserData,
	workorder: selectAllCustomerBooking
});

const mapDispatchToProps = (dispatch) => ({
	startFetchWorkOrder: (email) => dispatch(startFetchWorkOrder({ email }))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrderList);
