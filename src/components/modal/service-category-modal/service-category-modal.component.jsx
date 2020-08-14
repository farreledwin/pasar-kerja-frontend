import React from 'react';
import './service-category-modal.styles.scss';
import Modal from 'react-bootstrap/Modal';


const ServiceCategoryModal = ({show,handleClose}) => {

        return (
            <Modal className="modal-font" show={show} onHide={handleClose}>
            <div className="servicecategorymodal" show={show} onHide={handleClose}>
                <h4 className="servicecategorymodal__title">Select the best category to describe your service</h4>

                    <form className="servicecategorymodal__field-container">
                        <label for="">Kategori Jasa</label>
                             <select className="form-control" id="">
                                <option hidden>Kategori Jasa</option>
                            </select>
                    </form>

                <div className="servicecategorymodal__btn-container">
                     <button className="servicecategorymodal__btn servicecategorymodal__btn-back">Back</button>
                     <button className="servicecategorymodal__btn servicecategorymodal__btn-save">Save</button>
                </div>
            </div>
            </Modal>
        );
}


export default ServiceCategoryModal;