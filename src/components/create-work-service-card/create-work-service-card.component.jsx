import React, { useState , useEffect} from 'react';
import './create-work-service-card.styles.scss';
import Photo from '../../assets/after-workservicecard/photo.png';
import Arrow from '../../assets/after-workservicecard/arrow.png';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import ProfileCard from '../profile-card/profile-card.component';
import NoProfileCard from '../no-profile-card/no-profile-card.component';
import ServiceNameModal from '../modal/service-name-modal/service-name-modal.component';
import ServiceHourModal from '../modal/service-hour-modal/service-hour-modal.component';
import ServiceCategoryModal from '../modal/service-category-modal/service-category-modal.component';
import ServicePriceModal from '../modal/service-price-modal/service-price-modal.component';
import ServiceDescriptionModal from '../modal/service-desc-modal/service-desc-modal.component';
import {connect} from 'react-redux';
import {startInsertJob} from '../../redux/joblist/joblist.action';
import { selectUserData } from '../../redux/user/user.selectors';
import { selectProfileUser } from '../../redux/user/user.selectors';
import { startFetchProfile } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import HeaderType3 from '../header-type-3/header-type-3.component';
const CreateWorkServiceCard = ({
	getBase64,
	handleClose,
	handleServiceShow,
	handleWorkHoursShow,
	handleWorkCategoryShow,
	handlePriceShow,
	handleDescriptionShow,
	handleChange,
	handleSubmit,
	data,
	show,
	user,
	startFetchProfile,
	profile
}) => {
	const {
		serviceName,
		start_time_range,
		finish_time_range,
		workcategory,
		salary,
		discount,
		serviceDescription,
		job_image
	} = data;

	const { email } = user;

	useEffect(
		() => {
			if (user !== null) {
				startFetchProfile(email);
			}
		},
		[ user ]
	);
	return (
		<div className="createworkservicecard">
			<div className="createworkservicecard__img-container" style={{ backgroundImage: `url(${data.job_image})` }}>
				<input type="file" onChange={getBase64} className="createworkservicecard__img-btn" />
				{/* <img className="createworkservicecard__img-btn-icon" src={Photo} />Upload Photo */}
			</div>

			<div className="createworkservicecard__field-container">
				<div className="createworkservicecard__field">
					<h5 className="createworkservicecard__field-text">Service name</h5>
					<a
						href="javascript:void(0)"
						onClick={handleServiceShow}
						className="createworkservicecard__field-link"
					>
						<div className="createworkservicecard__field-link-container">
							<p className="createworkservicecard__field-link-txt">{data.serviceName}</p>
							<img className="createworkservicecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<ServiceNameModal
					show={show.service}
					handleClose={handleClose}
					handleShow={handleServiceShow}
					handleChange={handleChange}
				/>
				<div className="createworkservicecard__field">
					<h5 className="createworkservicecard__field-text">Service Description</h5>
					<a
						href="javascript:void(0)"
						onClick={handleDescriptionShow}
						className="createworkservicecard__field-link"
					>
						<div className="createworkservicecard__field-link-container">
							<p className="createworkservicecard__field-link-txt">{serviceDescription}</p>
							<img className="createworkservicecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<ServiceDescriptionModal
					show={show.description}
					handleClose={handleClose}
					handleShow={handleDescriptionShow}
					handleChange={handleChange}
				/>

				<div className="createworkservicecard__field">
					<h5 className="createworkservicecard__field-text">Work Hours</h5>
					<a
						href="javascript:void(0)"
						onClick={handleWorkHoursShow}
						name="hour"
						className="createworkservicecard__field-link"
					>
						<div className="createworkservicecard__field-link-container">
							<p className="createworkservicecard__field-link-txt">
								{data.start_time_range} : {data.finish_time_range}
							</p>
							<img className="createworkservicecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<ServiceHourModal
					show={show.workhours}
					handleClose={handleClose}
					handleShow={handleWorkHoursShow}
					handleChange={handleChange}
				/>
				<div className="createworkservicecard__field">
					<h5 className="createworkservicecard__field-text">Work Category</h5>
					<a
						href="javascript:void(0)"
						onClick={handleWorkCategoryShow}
						className="createworkservicecard__field-link"
					>
						<div className="createworkservicecard__field-link-container">
							<div>
								<button className="createworkservicecard__field-link-btn">
									Koki <img className="createworkservicecard__field-link-btn-logo" src={CheffHat} />
								</button>
							</div>
							<img className="createworkservicecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>

				<ServiceCategoryModal
					show={show.workcategory}
					handleClose={handleClose}
					handleShow={handleWorkCategoryShow}
					handleChange={handleChange}
				/>
				<div className="createworkservicecard__field">
					<h5 className="createworkservicecard__field-text">Price/ day</h5>
					<a
						href="javascript:void(0)"
						onClick={handlePriceShow}
						className="createworkservicecard__field-link"
					>
						<div className="createworkservicecard__field-link-container">
							<p className="createworkservicecard__field-link-txt">
								{data.salary} - {data.discount}{' '}
							</p>
							<img className="createworkservicecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<ServicePriceModal
					show={show.price}
					handleClose={handleClose}
					handleShow={handlePriceShow}
					handleChange={handleChange}
				/>
			</div>

			<div className="createworkservicecard__profile-container">
				<h5>Your Profile</h5>
				<div>{profile !== null ? <ProfileCard profile={profile} /> : null}</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectUserData,
	profile: selectProfileUser
});

const mapDispatchToProps = (dispatch) => ({
	startInsertJob: (
		serviceName,
		start_time_range,
		finish_time_range,
		workcategory,
		salary,
		discount,
		serviceDescription,
		job_image
	) =>
		dispatch(
			startInsertJob({
				serviceName,
				start_time_range,
				finish_time_range,
				workcategory,
				salary,
				discount,
				serviceDescription,
				job_image
			})
		),
	startFetchProfile: (email) => dispatch(startFetchProfile({ email }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkServiceCard);
