import React from 'react';
import './input-profile-aboutme-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';

const InputProfileAboutMeModal = ({ show, handleChange, handleClose }) => {
	return (
		<Modal show={show} className="modal-font modal-change-padding-about" onHide={handleClose}>
			<div className="modal-about-modal">
				<h4 className="inputprofileaboutmemodal__title">Tell us more about you</h4>

				<form className="inputprofileaboutmemodal__field-container">
					<div className="form-group">
						<label for="">About Me</label>
						<textarea className="form-control" onChange={handleChange} name="about" placeholder="I like new things" />
					</div>
				</form>

				<div className="inputprofileaboutmemodal__btn-container">
					<button
						onClick={handleClose}
						className="inputprofileaboutmemodal__btn inputprofileaboutmemodal__btn-back"
					>
						Back
					</button>
					<button
						onClick={handleClose}
						className="inputprofileaboutmemodal__btn inputprofileaboutmemodal__btn-save"
					>
						Save
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default InputProfileAboutMeModal;
