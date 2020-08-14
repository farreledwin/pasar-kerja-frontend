import React, { useState } from 'react';
import './service-hour-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';
import TimeKeeper from 'react-timekeeper';
import { useEffect } from 'react';
const ServiceHourModal = ({ show, handleClose, handleChange, data }) => {
console.log(data);


	return (
		<Modal className="modal-font" show={show} onHide={handleClose}>
			<div className="servicehourmodal">
				<h4 className="servicehourmodal__title">Complete your work hours </h4>

				<label for="">Working hours/day</label>
				<div className="form-row">
					<div className="form-group col-md-5">
						<div class="md-form md-outline input-with-post-icon timepicker" darktheme="true">
							<input
								type="text"
								onChange={handleChange}
								class="form-control"
								name="start_time_range"
								placeholder="Select time"
							/>
						</div>
					</div>
					<div className="form-group col-md-5">
						<input
							type="text"
							onChange={handleChange}
							class="form-control"
							name="finish_time_range"
							placeholder="Select time"
						/>
					</div>
					<div className="form-group col-sm-2">
						<div className="servicehourmodal__totalhour">
							<p>2 Jam</p>
						</div>
					</div>
				</div>

				<div className="servicehourmodal__btn-container">
					<button onClick={handleClose} className="servicehourmodal__btn servicehourmodal__btn-back">Back</button>
					<button onClick={handleClose} className="servicehourmodal__btn servicehourmodal__btn-save">Save</button>
				</div>
			</div>
		</Modal>
	);
};

export default ServiceHourModal;
