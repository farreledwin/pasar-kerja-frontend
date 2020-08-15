import React, { useState,useEffect } from 'react';
import './input-profile-edu-training-modal.styles.scss';
import AddBtn from '../../../assets/after-createprofilecard/addbtn.png';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';
import {startInsertEduTraining} from '../../../redux/edu-training/edu-training.action';

const InputProfileEduTrainingModal = ({ show, handleChange, handleClose,startInsertEduTraining }) => {
	const [ eduData, setEduData ] = useState([]);
    const [ countRow, setCountRow ] = useState(1);
    const [startYear,setDataStartYear] = useState('');
    const [description,setDataDescription] = useState('');
    const [endYear,setDataEndYear] = useState('');

    const setCountIncrement = () => {
        setCountRow(countRow + 1);
        startInsertEduTraining(description,startYear,endYear);
    };
    
    const handleDate = (event) => {
        setDataStartYear(event.target.value);
 
    }

    const handleEndDate = (event) => {
        setDataEndYear(event.target.value);
    }

    const handleDescription = (event) => {
        setDataDescription(event.target.value);
    }

    const addEdu = (description,startYear,endYear) => {
        setEduData(eduData.concat({description,startYear,endYear}));
        console.log(eduData);
    }


	return (
		<Modal show={show} className="modal-font modal-change-padding-about" onHide={handleClose}>
			<div className="inputprofileedutrainingmodal">
				<h4 className="inputprofileedutrainingmodal__title">Tell us your education & Training</h4>
				<label for="">Edukasi dan pelatihan</label>
				{Array.from({ length: countRow }).map(() => (
					<div className="form-row">
						<div className="form-group col-md-6">
							<input type="text" onChange={handleDescription} name="descriptioon" className="form-control" />
						</div>
						<div className="form-group col-md-3">
                        <select id="inputState" onChange={handleDate} className="form-control">
						<option hidden>From</option>
						<option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
					</select>

						</div>
						<div className="form-group col-md-3">
                        <select id="inputState" onChange={handleEndDate} className="form-control">
						<option hidden>To</option>
						<option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
					</select>
						</div>
					</div>
				))}

				<a
					href="javascript:void(0)"
					onClick={setCountIncrement}
					className="inputprofileedutrainingmodal__addrow"
				>
					<img src={AddBtn} className="inputprofileedutrainingmodal__addrow-icon" /> Tambah Baris
				</a>

				<div className="inputprofileedutrainingmodal__btn-container">
					<button onClick={handleClose} className="inputprofileedutrainingmodal__btn inputprofileedutrainingmodal__btn-back">
						Back
					</button>
					<button onClick={handleClose} className="inputprofileedutrainingmodal__btn inputprofileedutrainingmodal__btn-save">
						Save
					</button>
				</div>
			</div>
		</Modal>
    );
}
const mapDispatchToProps = dispatch => ({
    startInsertEduTraining: (description,startYear,endYear) => dispatch(startInsertEduTraining({description,startYear,endYear}))
});

export default connect(null,mapDispatchToProps)(InputProfileEduTrainingModal);
