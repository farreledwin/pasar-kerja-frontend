import React from 'react';
import './input-profile-name-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';

const InputProfileNameModal = ({show,handleChange,handleClose}) => {

	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			<div className="inputprofilenamemodal">
				<h4 className="inputprofilenamemodal__title">What is your name</h4>

				<form className="inputprofilenamemodal__field-container">
					<div className="form-group">
						<label for="">First Name</label>
						<input type="text" onChange={handleChange} name="first_name" className="form-control" placeholder="" />
					</div>
					<div className="form-group">
						<label for="">Last Name</label>
						<input type="text" onChange={handleChange} name="last_name" className="form-control" placeholder="" />
					</div>
				</form>

				<div className="inputprofilenamemodal__btn-container">
					<button onClick={handleClose} className="inputprofilenamemodal__btn inputprofilenamemodal__btn-back">Back</button>
					<button onClick={handleClose} className="inputprofilenamemodal__btn inputprofilenamemodal__btn-save">Save</button>
				</div>
			</div>
		</Modal>
	);
};

export default InputProfileNameModal;
