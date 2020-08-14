import React from 'react';
import './progress-circle.styles.scss';

const ProgressCircle = ({ value }) => (
	<div className="recommendation-job__all-circle-content text-center">
		<div className="recommendation-job__title-circle">
			<h5>{value}</h5>
		</div>
		<div className="recommendation-job__circle">
			<span className="rounded-circle" />
		</div>
	</div>
);
export default ProgressCircle;
