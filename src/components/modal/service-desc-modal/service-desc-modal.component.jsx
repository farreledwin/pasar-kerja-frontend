import React from 'react';
import './service-desc-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';
const ServiceDescModal = ({ show, handleClose, handleChange }) => {
	return (
		<Modal className="modal-font" show={show} onHide={handleClose}>
			<div className="servicedescmodal">
				<h4 className="servicedescmodal__title">Tell us a little bit about your service offer ?</h4>

				<form className="servicedescmodal__field-container">
					<div className="form-group">
						<label for="">Service Description</label>
						<textarea
                            className="form-control"
                            onChange={handleChange}
                            name="serviceDescription"
							placeholder="Cth: Pekerjaan yang anda lakukan dan keahlian di bidang jasa ini"
						/>
					</div>
				</form>

				<div className="servicedescmodal__btn-container">
					<button  onClick={handleClose} className="servicedescmodal__btn servicedescmodal__btn-back">Back</button>
					<button onClick={handleClose} className="servicedescmodal__btn servicedescmodal__btn-save">Save</button>
				</div>
			</div>
		</Modal>
	);
};

export default ServiceDescModal;
