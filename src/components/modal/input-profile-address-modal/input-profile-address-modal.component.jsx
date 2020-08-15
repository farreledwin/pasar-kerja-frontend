import React, { useState, useEffect } from 'react';
import './input-profile-address-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
const InputProfileAddressModal = ({ show, handleChange, handleClose }) => {
	const [ searchData, setSearchData ] = useState({ city: null });
	const { city } = searchData;

	useEffect(() => {
		async function fetchApi() {
			const res = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi');
			setSearchData({ city: res.data.provinsi });
			console.log(res.data.provinsi);
		}

		fetchApi();
	}, []);
	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			{city === null ? (
				<div>loading</div>
			) : (
				<div className="inputprofileaddressmodal">
					<h4 className="inputprofileaddressmodal__title">Complete your address </h4>

					<label for="">Home address</label>
					<div className="form-row">
						<div className="form-group col-md-6">
							<select id="inputState" onChange={handleChange} name="city" className="form-control">
								<option hidden>Kota </option>
								{city.map((item) => <option>{item.nama}</option>)}
							</select>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-12">
							<textarea className="form-control" onChange={handleChange} name="address" placeholder="Alamat Lengkap " />
						</div>
					</div>

					<div className="inputprofileaddressmodal__btn-container">
						<button  onClick={handleClose} className="inputprofileaddressmodal__btn inputprofileaddressmodal__btn-back">
							Back
						</button>
						<button onClick={handleClose} className="inputprofileaddressmodal__btn inputprofileaddressmodal__btn-save">
							Save
						</button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default InputProfileAddressModal;
