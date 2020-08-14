import React from 'react';
import './service-name-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';

const ServiceNameModal = ({show,handleClose,handleChange}) => {
        
        return (
            <Modal className="modal-font" show={show} onHide={handleClose}>
				 <div className="servicenamemodal">
                    <h4 className="servicenamemodal__title">Tell us what work will you offer ?</h4>

                        <form className="servicenamemodal__field-container">
                          <div className="form-group">
                              <label for="">Service name</label>
                              <input type="text" onChange={handleChange} name="serviceName" className="form-control" placeholder="Cth: Barista Kopi"></input>
                          </div>
                        </form>

                        <div className="servicenamemodal__btn-container">
                                <button className="servicenamemodal__btn servicenamemodal__btn-back">Back</button>
                                <button type="submit" onClick={handleClose} className="servicenamemodal__btn servicenamemodal__btn-save">Save</button>
                        </div>
            </div>
			</Modal>

        );
}

export default ServiceNameModal;