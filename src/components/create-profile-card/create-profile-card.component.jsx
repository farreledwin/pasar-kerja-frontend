import React from 'react';
import './create-profile-card.styles.scss';
import Photo from '../../assets/after-createprofilecard/photo.png';
import Arrow from '../../assets/after-createprofilecard/arrow.png';
import AddBtn from '../../assets/after-createprofilecard/addbtn.png';
import InputProfileNameModal from '../modal/input-profile-name-modal/input-profile-name-modal.component';
import InputProfileAddressModal from '../modal/input-profile-address-modal/input-profile-address-modal.component';
import InputProfileEmailModal from '../modal/input-profile-email-modal/input-profile-email-modal.component';
import InputProfileNumberModal from '../modal/input-profile-number-modal/input-profile-number-modal.component';
import InputProfileAboutMeModal from '../modal/input-profile-aboutme-modal/input-profile-aboutme-modal.component';
import InputProfileEduTrainingModal from '../modal/input-profile-edu-training-modal/input-profile-edu-training-modal.component';
import InputProfileWorkExpModal from '../modal/input-profile-work-exp-modal/input-profile-work-exp-modal.component';
import InputProflieSertificateModal from '../modal/input-profile-sertificate-modal/input-profile-sertificate-modal.component';
import InputProfileLanguagesModal from '../modal/input-profile-languages-modal/input-profile-languages-modal.component';
import { selectAllEduTraining } from '../../redux/edu-training/edu-training.selectors';
import { selectAllGalleryTraining } from '../../redux/gallery-certif/gallery-certif.selectors';
import { selectAllLanguageFormData } from '../../redux/language-modal/language-modal.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
const CreateProfileCard = ({
	show,
	data,
	handleChange,
	handleClose,
	handleFullNameShow,
	handleAddressShow,
	handleEmailShow,
	handleTelephoneShow,
	handleAboutShow,
	handleEduTrainingShow,
	edu_training,
	handleWorkExpShow,
	getBase64,
	handleGalleryShow,
	handleLanguageShow,
	gallery,
	language
}) => {
	console.log(gallery);
	return (
		<div className="createprofilecard">
			<div className="createprofilecard__img-container" style={{ backgroundImage: `url(${data.profilephoto})` }}>
					<input
						type="file"
						onChange={getBase64}
						name="profilephoto"
						className="createprofilecard__img-btn"
						id="uploadfile"
					/>
					<label for='uploadfile' className="createprofilecard__img-btn-2"><span className="mgl-5">Upload Photo</span></label>

			</div>

			<div className="createprofilecard__field-container">
				<h4 className="createprofilecard__field-title">Personal Info</h4>
				<div className="createprofilecard__field">
					<h5 className="createprofilecard__field-text">Full Name</h5>
					<a href="javascript:void(0)" onClick={handleFullNameShow} className="createprofilecard__field-link">
						<div className="createprofilecard__field-link-container">
							<p className="createprofilecard__field-link-txt" name="fullname">
								{data.first_name} {data.last_name}{' '}
							</p>
							<img className="createprofilecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<InputProfileNameModal show={show.fullname} handleChange={handleChange} handleClose={handleClose} />

				<div className="createprofilecard__field">
					<h5 className="createprofilecard__field-text">Address</h5>
					<a href="javascript:void(0)" onClick={handleAddressShow} className="createprofilecard__field-link">
						<div className="createprofilecard__field-link-container">
							<p className="createprofilecard__field-link-txt">
								{data.city},{data.address}
							</p>
							<img className="createprofilecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<InputProfileAddressModal show={show.address} handleChange={handleChange} handleClose={handleClose} />
			</div>

			<div className="createprofilecard__field-container">
				<h4 className="createprofilecard__field-title">Contact Info</h4>
				<div className="createprofilecard__field">
					<h5 className="createprofilecard__field-text">Email</h5>
					<a href="javascript:void(0)" onClick={handleEmailShow} className="createprofilecard__field-link">
						<div className="createprofilecard__field-link-container">
							<p className="createprofilecard__field-link-txt">{data.email}</p>
							<img className="createprofilecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<InputProfileEmailModal show={show.email} handleChange={handleChange} handleClose={handleClose} />
				<div className="createprofilecard__field">
					<h5 className="createprofilecard__field-text">Telephone Number</h5>
					<a
						href="javascript:void(0)"
						onClick={handleTelephoneShow}
						className="createprofilecard__field-link"
					>
						<div className="createprofilecard__field-link-container">
							<p className="createprofilecard__field-link-txt">{data.telephone}</p>
							<img className="createprofilecard__field-link-arrow" src={Arrow} alt="" />
						</div>
					</a>
				</div>
				<InputProfileNumberModal show={show.telephone} handleChange={handleChange} handleClose={handleClose} />
			</div>

			<div className="createprofilecard__upload-field">
				<h4 className="createprofilecard__upload-field-title">About Me</h4>
				<p className="createprofilecard__upload-field-text">
					Workers with this information got employed 10x faster
				</p>
				<a href="javascript:void(0)" onClick={handleAboutShow} className="createprofilecard__upload-field-link">
					{data.about === '' ? (
						<div>
							<img src={AddBtn} /> <span>Ceritakan tentang Saya</span>
						</div>
					) : (
						<div>{data.about}</div>
					)}
				</a>
			</div>
			<InputProfileAboutMeModal show={show.about} handleChange={handleChange} handleClose={handleClose} />

			<div className="createprofilecard__upload-field">
				<h4 className="createprofilecard__upload-field-title">Training And Education</h4>
				<p className="createprofilecard__upload-field-text">
					Workers with this information got employed 10x faster
				</p>
				{edu_training.length !== 0 ? (
					edu_training.map((item) => (
						<div>
							{item.description} - {item.startYear} - {item.endYear}
						</div>
					))
				) : null}

				<a
					href="javascript:void(0)"
					onClick={handleEduTrainingShow}
					className="createprofilecard__upload-field-link"
				>
					<img src={AddBtn} /> Ceritakan tentang Saya
				</a>
			</div>
			<InputProfileEduTrainingModal
				show={show.profile_edu}
				handleChange={handleChange}
				handleClose={handleClose}
			/>

			<div className="createprofilecard__upload-field">
				<h4 className="createprofilecard__upload-field-title">Work Experience</h4>
				<p className="createprofilecard__upload-field-text">
					Workers with this information got employed 5x faster
				</p>
				<a
					href="javascript:void(0)"
					onClick={handleWorkExpShow}
					className="createprofilecard__upload-field-link"
				>
					{data.work_exp === '' ? (
						<div>
							<img src={AddBtn} /> Tambahkan Pengalaman Kerja
						</div>
					) : (
						<div>{data.work_exp}</div>
					)}
				</a>
			</div>
			<InputProfileWorkExpModal show={show.work_exp} handleChange={handleChange} handleClose={handleClose} />

			<div className="createprofilecard__upload-credential-field">
				<h4 className="createprofilecard__upload-field-title">Identity and credential</h4>
				<div className="createprofilecard__upload-credential-field-container">
					<div className="createprofilecard__upload-credential-field-container-single">
						<h5>ID CARD</h5>
						<div
							className="createprofilecard__upload-credential-img-container"
							style={{ backgroundImage: `url(${data.id_photo})` }}
						>
							<input
								type="file"
								onChange={getBase64}
								name="idphoto"
								className="createprofilecard__img-btn"
								id="idcard"
							/>
							<label for="idcard">
								<span className="createprofilecard__img-btn-3"><img src={Photo} className="createprofilecard__img-btn-3-icon"></img></span>
							</label>
						</div>
					</div>
					<div className="createprofilecard__upload-credential-field-container-single">
						<h5>SKCK</h5>
						<div
							className="createprofilecard__upload-credential-img-container"
							style={{ backgroundImage: `url(${data.skck})` }}
						>
							<input
								type="file"
								onChange={getBase64}
								name="skck"
								className="createprofilecard__img-btn"
								id="SKCK"
							/>
							<label for="SKCK">
								<span className="createprofilecard__img-btn-3"><img src={Photo} className="createprofilecard__img-btn-3-icon"></img></span>
							</label>
						</div>
					</div>
				</div>

				<div className="createprofilecard__upload-credential-field-container">
					<div className="createprofilecard__upload-credential-field-container-single">
						<h5>Photo With ID CARD</h5>
						<div
							className="createprofilecard__upload-credential-img-container"
							style={{ backgroundImage: `url(${data.photo_with_idcard})` }}
						>
							<input
								type="file"
								onChange={getBase64}
								name="photowithidcard"
								className="createprofilecard__img-btn"
								id="photowithidcard"
							/>
							<label for="photowithidcard">
								<span className="createprofilecard__img-btn-3"><img src={Photo} className="createprofilecard__img-btn-3-icon"></img></span>
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className="createprofilecard__upload-field">
				<h4 className="createprofilecard__upload-field-title">Gallery & Certificates</h4>
				<p className="createprofilecard__upload-field-text">Unggah berkas Edukasi dan sertifikasi Anda</p>
				{gallery.length !== null ? (
					gallery.map((item) => (
						<div className="row margin-bottom-5">
							<div className="col-md-6">
								<img src={item.gallery} className="createprofilecard__upload-img" />
							</div>

							<div className="col-md-6">
								<p>{item.note}</p>
							</div>
						</div>
					))
				) : null}
				<a
					href="javascript:void(0)"
					onClick={handleGalleryShow}
					className="createprofilecard__upload-field-link"
				>
					<img src={AddBtn} /> Unggah Edukasi dan Sertifikasi{' '}
				</a>
			</div>
			<InputProflieSertificateModal show={show.gallery} handleChange={handleChange} handleClose={handleClose} />

			<div className="createprofilecard__field">
				<h5 className="createprofilecard__field-text">Languages</h5>
				<a href="javascript:void(0)" onClick={handleLanguageShow} className="createprofilecard__field-link">
					<div className="createprofilecard__field-link-container">
						<div className="createprofilecard__field-link-container-language">
							{language.length !== 0 ? (
							language.map((item) => (
								<div>
									<p className="createprofilecard__field-link-txt">
										{item.languageText} - {item.levelText}
									</p>
								</div>
							))
						) : null}
						</div>
						<img className="createprofilecard__field-link-arrow" src={Arrow} alt="" />
					</div>
				</a>
			</div>
			<InputProfileLanguagesModal show={show.language} handleChange={handleChange} handleClose={handleClose} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	edu_training: selectAllEduTraining,
	gallery: selectAllGalleryTraining,
	language: selectAllLanguageFormData
});

export default connect(mapStateToProps, null)(CreateProfileCard);
