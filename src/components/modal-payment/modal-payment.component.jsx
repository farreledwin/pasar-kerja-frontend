import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal-payment.styles.scss';
import Logo_Bank_BCA_1 from '../../assets/payment-detail/Logo_Bank_BCA_1.png';
import { connect } from 'react-redux';
import { selectUserData } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { selectAllDataJobDetail } from '../../redux/joblist/joblist.selectors';

const ModalPayment = ({ handleShow, handleClose, handleOpen, show, data, job, user,handleSubmit }) => {
	const specialCustom = {
		display: 'block',
		position: 'relative',
		fontSize: '2em',
		left: '-1em'
	};


	return (
		<div>
			<Modal className="modal-font" show={show} onHide={handleClose}>
				<Modal.Header className="custom-padding-modal custom-style" closeButton>
					<span aria-hidden="true" style={specialCustom}>
						×
					</span>
					<Modal.Title className="custom-font" style={{ paddingTop: '0.2em' }}>
						Payment
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="custom-content">
					Payment method
					<p>see all</p>
				</Modal.Body>
				<Modal.Body className="bca-payment">
					<div style={{ marginLeft: '-0.7em' }}>
						<img src={Logo_Bank_BCA_1} />
					</div>
					<p>BCA Virtual Account</p>
				</Modal.Body>
				<Modal.Body className="payment-summary">
					<div>
						<p>Payment Summary</p>
					</div>
					<div className="price">
						<p style={{ fontFamily: 'helvetica' }}>
							Rp.{job.salary} x {data.data.manyDay} Day
						</p>
						<p style={{ fontFamily: 'helvetica' }}>{job.salary * data.data.manyDay}</p>
					</div>
					<div className="price">
						<p style={{ fontFamily: 'helvetica' }}>Admin Fee</p>
						<p style={{ fontFamily: 'helvetica' }}>Rp.50.000</p>
					</div>
				</Modal.Body>
				<Modal.Footer className="change-justify">
					<div className="flex-total">
						<p>Total :</p>
						<p>{data.data.total_price}</p>
					</div>
					<Button type="submit" onClick={handleSubmit} className="button-custom-background" variant="primary">
						PAY
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	job: selectAllDataJobDetail,
	user: selectUserData
});


export default connect(mapStateToProps, null)(ModalPayment);
