import React, { useState } from 'react';
import './profile-card-mini.styles.scss';
import LocationLogo from '../../assets/after-jobdetailpage/location_icon.png';
import Ceklis from '../../assets/after-jobdetailpage/ceklis.png';

const ProfileCardMini = (props) => {
	
	console.log(props);
	return (
		<div className="profile-card">
			<div className="profile-card__main-container">
				<div className="profile-card__title-container">
					<div className="profile-card__title">
						<h2 className="profile-card__title--name">{props.job.people_name}</h2>
						<div className="profile-card__title-location">
							<img className="profile-card__title-location--img" src={LocationLogo} alt="" />
							<h5>{props.job.city}</h5>
						</div>
					</div>

					<img className="profile-card__img" src={props.job.people_image} />
				</div>

				<div className="profile-card__description-container">
					<h5 className="profile-card__description-title">About Me</h5>
					<p className="profile-card__description-text">{props.job.people_about}</p>
				</div>

				<div className="profile-card__description-container">
					<h5 className="profile-card__description-title">Experience</h5>
					<p className="profile-card__description-text">{props.job.people_experience}</p>
				</div>

				<div className="profile-card__sertification">
					<h5>Sertifikasi</h5>
					<div className="profile-card__sertification-list">
						{props.job.certifications.map((data) => (
							<div>
								<div className="profile-card__sertification-item">
									<h6 className="profile-card__sertification-name">{data}</h6>

									<img className="profile-card__sertification-check" src={Ceklis} />
								</div>
								<hr />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="profile-card__link-container">
				<a className="profile-card__link" href="">
					Kunjungi Profil
				</a>
			</div>
		</div>
	);
};

export default ProfileCardMini;
