import React, { useState, useEffect } from 'react';
import './input-profile-languages-modal.styles.scss';
import AddBtn from '../../../assets/after-createprofilecard/addbtn.png';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { startInsertLanguage } from '../../../redux/language-modal/language-modal.action';
const InputProfileLanguagesModal = ({ show, handleChange, handleClose, startInsertLanguage }) => {
	const [ countRow, setCountRow ] = useState(1);
	const [ languageText, setLanguageText ] = useState('');
	const [ levelText, setLevelText ] = useState('');
	const setCountIncrement = () => {
		setCountRow(countRow + 1);
        startInsertLanguage(languageText, levelText);
        setLevelText('');
        setLanguageText('');
	};

	const setTextLanguage = (event) => {
		setLanguageText(event.target.value);
	};

	const setLevelLanguageText = (event) => {
		setLevelText(event.target.value);
	};
	const saveAction = () => {
		if (languageText != '' && levelText != '') {
            startInsertLanguage(languageText, levelText);
            setLevelText('');
            setLanguageText('');
			handleClose();
		} else {
			handleClose();
		}
	};
	return (
		<Modal show={show} className="modal-font" onHide={handleClose}>
			<div className="inputprofilelanguagesmodal">
				<h4 className="inputprofilelanguagesmodal__title">Languages </h4>

				<label for="">Choose Language</label>
				{Array.from({ length: countRow }).map(() => (
					<div className="form-row">
						<div className="form-group col-md-6">
							<input
								type="text"
								name="language-select"
								onChange={setTextLanguage}
								name="textlanguage"
								className="form-control"
							/>
						</div>
						<div className="form-group col-md-6">
							<select
								id="inputState"
								onChange={setLevelLanguageText}
								name="leveloption"
								className="form-control"
							>
								<option hidden>Level</option>
								<option>Beginner</option>
								<option>Intermediate</option>
								<option>Native</option>
							</select>
						</div>
					</div>
				))}
				<a
					href="javascript:void(0);"
					onClick={setCountIncrement}
					className="inputprofilelanguagesmodal__addrow"
				>
					<img src={AddBtn} className="inputprofilelanguagesmodal__addrow-icon" /> Tambah Baris
				</a>

				<div className="inputprofilelanguagesmodal__btn-container">
					<button
						onClick={handleClose}
						className="inputprofilelanguagesmodal__btn inputprofilelanguagesmodal__btn-back"
					>
						Back
					</button>
					<button
						onClick={saveAction}
						className="inputprofilelanguagesmodal__btn inputprofilelanguagesmodal__btn-save"
					>
						Save
					</button>
				</div>
			</div>
		</Modal>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startInsertLanguage: (languageText, levelText) => dispatch(startInsertLanguage({ languageText, levelText }))
});

export default connect(null, mapDispatchToProps)(InputProfileLanguagesModal);
