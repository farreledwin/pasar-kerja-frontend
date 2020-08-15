import React, { useState } from 'react';
import './create-profile.styles.scss';
import CreateProfileCard from '../../components/create-profile-card/create-profile-card.component';
import ShareCvCard from '../../components/share-cv-card/share-cv-card.component';

const CreateProfile = () => {
	const [ show, setShow ] = useState({
		fullname: false,
		address: false,
		email: false,
		telephone: false,
		about: false,
		profile_edu: false,
		work_exp: false,
		gallery: false,
		language: false
	});
	const [ data, setData ] = useState({
		first_name: '',
		last_name: '',
		address: '',
		city: '',
		email: '',
		telephone: '',
		about: '',
		edu_training: [],
		work_exp: '',
		id_photo: '',
		photo_with_idcard: '',
		skck: '',
		galery_certificate: [],
		language: [],
		profilephoto: ''
	});

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleFullNameShow = () => {
		setShow({ ...show, fullname: true });
	};

	const handleAddressShow = () => {
		setShow({ ...show, address: true });
	};

	const handleEmailShow = () => {
		setShow({ ...show, email: true });
	};

	const handleTelephoneShow = () => {
		setShow({ ...show, telephone: true });
	};

	const handleAboutShow = () => {
		setShow({ ...show, about: true });
	};

	const handleEduTrainingShow = () => {
		setShow({ ...show, profile_edu: true });
	};

	const handleWorkExpShow = () => {
		setShow({ ...show, work_exp: true });
	};

	const handleGalleryShow = () => {
		setShow({ ...show, gallery: true });
	};
	const handleLanguageShow = () => {
		setShow({ ...show, language: true });
	};

	const handleClose = () => {
		setShow(false);
	};
	const getBase64 = (e) => {
		var file = e.target.files[0];
		const target = e.target.name;
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if (target === 'idphoto') {
				setData({ ...data, id_photo: reader.result });
				console.log(data);
			} else if (target === 'skck') {
				setData({ ...data, skck: reader.result });
				console.log(data);
			} else if (target === 'photowithidcard') {
				setData({ ...data, photo_with_idcard: reader.result });
				console.log(data);
			} else if (target === 'skck') {
				setData({ ...data, skck: reader.result });
			} else if (target === 'profilephoto') {
				setData({ ...data, profilephoto: reader.result });
			}
		};
		reader.onerror = function(error) {
			console.log('Error: ', error);
		};
	};

	return (
		<div className="createprofile">
			<h1 className="createprofile__text">Profile</h1>
			<div className="createprofile__container">
				<div className="createprofile__insert--container">
					<CreateProfileCard
						show={show}
						data={data}
						handleChange={handleChange}
						handleClose={handleClose}
						handleFullNameShow={handleFullNameShow}
						handleAddressShow={handleAddressShow}
						handleEmailShow={handleEmailShow}
						handleTelephoneShow={handleTelephoneShow}
						handleAboutShow={handleAboutShow}
						handleEduTrainingShow={handleEduTrainingShow}
						handleWorkExpShow={handleWorkExpShow}
						handleGalleryShow={handleGalleryShow}
						handleLanguageShow={handleLanguageShow}
						getBase64={getBase64}
					/>
				</div>

				<div>
					<div className="createprofile__sharecvcard--container">
						<ShareCvCard />
					</div>
					<div className="createprofile__btn--container">
						<button className="createprofile__btn">Save & Close</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateProfile;