import React from 'react';
import './order-card.styles.scss';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';

const OrderCard = ({ data }) => {
	return (
		<div>
			<div className="ordercard">
				<div className="ordercard__status">
					{data.status_order === 2 ? (
						<h5>Accepted</h5>
					) : data.status_order === 3 ? (
						<h5>Declined</h5>
					) : (
						<h5>New Order</h5>
					)}
				</div>

				<div className="ordercard__desc">
					<img className="ordercard__desc-img" src={CoffeeFill} />

					<div className="ordercard__desc-detail">
						<h6 className="ordercard__desc-detail--title">{data.job.job_name}</h6>
						<h4 className="ordercard__desc-detail--salary">Rp.{data.job.salary}/day</h4>
						<p className="ordercard__desc-detail--description">{data.job.job_description}</p>
						<div className="ordercard__desc-detail-footer">
							<div className="ordercard__desc-detail-footer--rating">
								{Array.from({ length: data.job.job_rating }).map(() => (
									<div>
										<img
											src={RatingActive}
											className="ordercard__desc-detail-footer--rating-star"
										/>
									</div>
								))}
								<p className="ordercard__desc-detail-footer--rating-text">{data.job.job_review}</p>
							</div>

							<button className="btn btn-outline-info">
								Koki <img className="btn-logo" src={CheffHat} />
							</button>
						</div>
					</div>
				</div>

				<a className="ordercard__cancel-link" href="">
					Batalkan Transaksi
				</a>
			</div>
		</div>
	);
};

export default OrderCard;
