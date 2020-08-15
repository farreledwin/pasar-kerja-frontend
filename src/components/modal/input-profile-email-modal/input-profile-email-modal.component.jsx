import React from 'react';
import './input-profile-email-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';
const InputProfileEmailModal = ({ show, handleChange, handleClose }) => {
	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			<div className="inputprofileemailmodal">
				<div className="flex">
					<h4 className="inputprofileemailmodal__title">Complete your email</h4>
					<p className="inputprofileemailmodal__title-2">this information wont appear in your profile</p>
				</div>
				<form className="inputprofileemailmodal__field-container">
					<div className="form-group">
						<label for="">Email</label>
						<div className="inputprofileemailmodal__field-placeholder-container">
							<input type="text" name="email" onChange={handleChange} className="form-control" placeholder="" />
							<div className="inputprofileemailmodal__field-placeholder">
								<p className="inputprofileemailmodal__field-placeholder-txt-1">Cth: XXXX@XXXX</p>
								<p className="inputprofileemailmodal__field-placeholder-txt-2">.com </p>
							</div>
						</div>
					</div>
				</form>

				<div className="inputprofileemailmodal__btn-container">
					<button onClose={handleClose} className="inputprofileemailmodal__btn inputprofileemailmodal__btn-back">Back</button>
					<button onClose={handleClose} className="inputprofileemailmodal__btn inputprofileemailmodal__btn-save">Save</button>
				</div>
			</div>
		</Modal>
	);
};

export default InputProfileEmailModal;
