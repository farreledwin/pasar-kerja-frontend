import React, { useEffect, useState } from 'react';
import './order-list.styles.scss';
import OrderCard from '../../components/order-card/order-card.component';
import FilterCard from '../../components/filter-card/filter-card.component';
import SimiliarJob from '../../components/similiar-job/similiar-job.component';
import { connect } from 'react-redux';
import { startFetchBooking } from '../../redux/booking/booking.action';
import { createStructuredSelector } from 'reselect';
import { selectAllCustomerBooking } from '../../redux/booking/booking.selectors';
import { selectUserData } from '../../redux/user/user.selectors';
const OrderList = ({ data, user, startFetchBooking }) => {
	const [ filterValue, setFilterValue ] = useState('');

    const { email } = user;
    
    const handleChange = (event) => {
        event.preventDefault();
        setFilterValue(event.target.value);
        console.log(filterValue);
    }
	useEffect(
		() => {
			if (user !== null) {
				startFetchBooking(email);
			}
		},
		[ user ]
	);
	return (
		<div>
			{data === null ? (
				<div>Loading</div>
			) : (
				<div>
					<div className="orderlist">
						<div>
							<h1 className="orderlist__title">Pesananmu</h1>
							<div className="orderlist__item">
                                {filterValue !== '' ?
                                data.filter(item => item.payment_status === filterValue).map(items => (
                                    <OrderCard data={items} />
                                )) : data.map(item => <OrderCard data={item} />)}
							</div>
						</div>

						<div>
							<FilterCard handleChange={handleChange} filter={filterValue} />
						</div>
					</div>

					<hr />

					<div>
						<SimiliarJob data={data} />
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectAllCustomerBooking,
	user: selectUserData
});

const mapDispatchToProps = (dispatch) => ({
	startFetchBooking: (email) => dispatch(startFetchBooking({ email }))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
