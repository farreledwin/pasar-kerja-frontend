import React from 'react';
import './input-profile-work-exp-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';


const InputProfileWorkExpModal = ({ show, handleChange, handleClose }) => {

        return (
            <Modal show={show} className="modal-font modal-change-padding-about" onHide={handleClose}>
            <div className="inputprofileworkexpmodal">  
            <h4 className="inputprofileworkexpmodal__title">Tell us your work/service Experience</h4>

                <form className="inputprofileworkexpmodal__field-container">
                        <div className="form-group">
                          <label for="">Pengalaman Kerja</label>
                          <textarea className="form-control" onChange={handleChange} name="work_exp" placeholder="Cth: Pengalaman kerja yang pernah anda lakukan"></textarea>
                        </div>
                </form>

            <div className="inputprofileworkexpmodal__btn-container">
                 <button onHide={handleClose} className="inputprofileworkexpmodal__btn inputprofileworkexpmodal__btn-back">Back</button>
                 <button onHide={handleClose} className="inputprofileworkexpmodal__btn inputprofileworkexpmodal__btn-save">Save</button>
            </div>
        </div>
        </Modal>
        );
    }

export default InputProfileWorkExpModal;