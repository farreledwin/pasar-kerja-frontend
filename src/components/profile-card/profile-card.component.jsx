import React from 'react';
import './profile-card.styles.scss';
import LocationLogo from '../../assets/after-jobdetailpage/location_icon.png';
import Ceklis from '../../assets/after-jobdetailpage/ceklis.png';

const ProfileCard = (profile) => {
	console.log(profile);
	return (
		<div className="profilecard">
                {profile.profile.edu_training_data === undefined || profile.profile.gallery_certif === undefined || profile.profile.language_exp === undefined ? (
                    <p>Loading</p>
                ) : (
				<div className="profilecard__main-container">
					<div className="profilecard__title-container">
						<div className="profilecard__title">
							<h2 className="profilecard__title--name">{profile.profile.first_name}</h2>
							<div className="profilecard__title-location">
								<img className="profilecard__title-location--img" src={LocationLogo} alt="" />
								<h5>{profile.profile.city}</h5>
							</div>
						</div>

						<img className="profilecard__img" src={profile.profile.id_photo} />
					</div>

					<div className="profilecard__description-container">
						<h5 className="profilecard__description-title">About me</h5>
						<p className="profilecard__description-text">{profile.profile.about}</p>
					</div>

					<div className="profilecard__description-container">
						<h5 className="profilecard__description-title">Work Experience</h5>
						<p className="profilecard__description-text">{profile.profile.work_exp}</p>
					</div>

					<div className="profilecard__achievement">
						<h5>Identity And Credentials</h5>
						<div className="profilecard__achievement-list">
							{profile.profile.photo_with_idcard !== null ? (
								<div className="profilecard__achievement-item">
									<h6 className="profilecard__achievement-name">KTP</h6>

									<img className="profilecard__achievement-check" src={Ceklis} />
								</div>
							) : null}

							<hr />
							{profile.profile.skck !== null ? (
								<div className="profilecard__achievement-item">
									<h6 className="profilecard__achievement-name">SKCK</h6>

									<img className="profilecard__achievement-check" src={Ceklis} />
								</div>
							) : null}
							<hr />
						</div>
					</div>

					<div className="profilecard__achievement">
						<h5>Education And Training</h5>
						<div className="profilecard__achievement-list">
							{profile.profile.edu_training_data.map((item) => (
								<div className="profilecard__achievement-item">
									<h6 className="profilecard__achievement-name">{item.description}</h6>

									<p className="profilecard__achievment-date">
										{item.startYear} - {item.endYear}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="profilecard__achievement">
						<h5>Gallery and Certification</h5>
						<div className="profilecard__achievement-list">
							{profile.profile.gallery_certif.map((item) => (
								<div className="profilecard__achievement-item">
									<h6 className="profilecard__achievement-name">{item.note}</h6>

									<a href="" className="profilecard__achievement-certification-link">
										Lihat
									</a>
								</div>
							))}

							<hr />
						</div>
					</div>

					<div className="profilecard__achievement">
						<h5>Languages</h5>
						<div className="profilecard__achievement-list">
							{profile.profile.language_exp.map((item) => (
								<div className="profilecard__achievement-item">
									<h6 className="profilecard__achievement-name">{item.languageText}</h6>

									<p className="profilecard__achievement-languages-status">{item.levelText}</p>
								</div>
							))}

							<hr />
						</div>
					</div>
					<div className="profilecard__link-container">
						<a className="profilecard__link" href="">
							Complete Profile
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileCard;
