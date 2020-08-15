import React, { useState } from 'react';
import './input-profile-sertificate-modal.styles.scss';
import AddBtn from '../../../assets/after-createprofilecard/addbtn.png';
import Photo from '../../../assets/after-workservicecard/photo.png';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {startInsertGalleryCertif} from '../../../redux/gallery-certif/gallery-certif.action';
import { createStructuredSelector } from 'reselect';
import {selectAllGalleryTraining} from '../../../redux/gallery-certif/gallery-certif.selectors';
const InputProfileSertificateModal = ({ show, handleChange, handleClose, startInsertGalleryCertif }) => {
	const [ certifData, setCertifData ] = useState([]);
	const [ countRow, setCountRow ] = useState(1);
	const [ gallery, setGallery ] = useState('');
	const [ note, setNote ] = useState('');

	const saveAction = () => {
        startInsertGalleryCertif(gallery, note);
        handleClose();
	};

	const handleNote = (event) => {
		setNote(event.target.value);
	};
	const getBase64 = (e) => {
		var file = e.target.files[0];
		const target = e.target.name;
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setGallery(reader.result);
		};
		reader.onerror = function(error) {
			console.log('Error: ', error);
		};
	};

	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			<div className="inputprofilesertificatemodal">
				<h4 className="inputprofilesertificatemodal__title">Upload work related photo and certificates </h4>

				<label for="">Galeri dan sertifikat</label>
					<div className="form-row">
						<div className="form-group col-md-4">
							<div className="inputprofilesertificatemodal__img-container" style={{ backgroundImage: `url(${gallery})` }}>
								<input
									type="file"
									onChange={getBase64}
									name="idphoto"
									className="inputprofilesertificatemodal__img-btn"
									id="sertifphoto"
								/>
								<label for="sertifphoto">
									<span className="createprofilecard__img-btn-3"><img src={Photo} className="createprofilecard__img-btn-3-icon"></img></span>
								</label>
							</div>
						</div>
						<div className="form-group col-md-8">
							<textarea
								onChange={handleNote}
								name="note"
								className="form-control"
								placeholder="Catatan"
							/>
						</div>
					</div>
				))

				<div className="inputprofilesertificatemodal__btn-container">
					<button onClick={handleClose} className="inputprofilesertificatemodal__btn inputprofilesertificatemodal__btn-back">
						Back
					</button>
					<button onClick={saveAction} className="inputprofilesertificatemodal__btn inputprofilesertificatemodal__btn-save">
						Save
					</button>
				</div>
			</div>
		</Modal>
	);
};

const mapStateToProps = createStructuredSelector({
    gallery : selectAllGalleryTraining
})

const mapDispatchToProps = (dispatch) => ({
	startInsertGalleryCertif: (gallery, note) => dispatch(startInsertGalleryCertif({ gallery, note }))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputProfileSertificateModal);
