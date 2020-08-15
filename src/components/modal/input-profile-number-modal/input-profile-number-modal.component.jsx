import React from 'react';
import './input-profile-number-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';
const InputProfileNumberModal = ({ show, handleChange, handleClose }) => {
	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			<div className="inputprofilenumbermodal">
				<div className="flex">
					<h4 className="inputprofilenumbermodal__title">Complete your phone number</h4>
					<p className="inputprofilenumbermodal__title-2">this information wont appear in your profile</p>
				</div>
				<form className="inputprofilenumbermodal__field-container">
					<div className="form-group">
						<label for="">Phone Number</label>
						<div className="inputprofilenumbermodal__field-placeholder-container">
							<input type="text" className="form-control" onChange={handleChange} name="telephone" placeholder="+62" />
						</div>
					</div>
				</form>

				<div className="inputprofilenumbermodal__btn-container">
					<button type="submit" onClick={handleClose} className="inputprofilenumbermodal__btn inputprofilenumbermodal__btn-back">Back</button>
					<button type="submit" onClick={handleClose} className="inputprofilenumbermodal__btn inputprofilenumbermodal__btn-save">Save</button>
				</div>
			</div>
		</Modal>
	);
};

export default InputProfileNumberModal;
