import React from 'react';
import './service-price-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';

const ServicePriceModal = ({show,handleClose,handleChange}) => {
        return (
            <Modal className="modal-font" show={show} onHide={handleClose}>
            <div className="servicepricemodal">
                    <h4 className="servicepricemodal__title">Complete your Service Price </h4>

                        <form className="servicepricemodal__field-container">
                          <div className="form-group">
                              <label for="">Price per day</label>
                              <input type="text" onChange={handleChange} name="salary" className="form-control" placeholder="Rp."></input>
                          </div>
                          <div className="form-group">
                              <div className="space-between">
                              <label for="">Monthly Orders discount</label>
                              <p>optional</p>
                              </div>
                              <input type="text" onChange={handleChange} name="discount" className="form-control" placeholder="%  "></input>
                          </div>
                        </form>

                        <div className="servicepricemodal__btn-container">
                                <button  onClick={handleClose} className="servicepricemodal__btn servicepricemodal__btn-back">Back</button>
                                <button  onClick={handleClose} className="servicepricemodal__btn servicepricemodal__btn-save">Save</button>
                        </div>
            </div>
            </Modal>
        );
    }

export default ServicePriceModal;