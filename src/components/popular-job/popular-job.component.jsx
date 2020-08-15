import React from 'react';
import './popular-job.styles.scss';
import Beautiful from '../../assets/homepage/beautiful.png';
import Chef from '../../assets/homepage/chef.png';

const PopularJob = () => (
	<div class="popular-job">
		<p>Most Common Work Orders</p>
		<div className="popular-job__section">
			<div className="popular-job__photo">
				<img src={Beautiful} alt="..." class="" />
				<p>10 Worker</p>
				<span>Education</span>
			</div>
			<div className="popular-job__photo">
				<img src={Beautiful} alt="..." class="" />
				<p>15 Worker</p>
				<span>Beauty Services</span>
			</div>
			<div className="popular-job__photo">
				<img src={Chef} alt="..." class="" />
				<p>12 Worker</p>
				<span>Food & Beverages</span>
			</div>
		</div>
	</div>
);
export default PopularJob;
