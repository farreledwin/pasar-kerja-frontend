import React from 'react';
import './work-service-non-card.styles.scss';
import Honk from '../../assets/after-workservicelistpage/honk.png';

const WorkServiceNonCard = () => {
	return (
		<div className="workservicenoncard">
			<img src={Honk} className="workservicenoncard__img" />
			<div className="workservicenoncard__text">
				<p>Pasang iklan pekerjaan anda dan</p>
				<p>jangan lupa untuk melengkapi profil mu</p>
			</div>

			<div className="workservicenoncard__button-container">
				<button className="workservicenoncard__button--complete">Complete Profile</button>
				<button className="workservicenoncard__button--add">Add Service</button>
			</div>
		</div>
	);
};

export default WorkServiceNonCard;
