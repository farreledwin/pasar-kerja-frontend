import React from 'react';
import './create-profile-card.styles.scss';
import Photo from '../../assets/after-createprofilecard/photo.png';
import Arrow from '../../assets/after-createprofilecard/arrow.png';
import AddBtn from '../../assets/after-createprofilecard/addbtn.png';
const CreateProfileCard = () => {
    return (
        <div className="createprofilecard">
            <div className="createprofilecard__img-container">
                <button className="createprofilecard__img-btn"><img className="createprofilecard__img-btn-icon"src={Photo}></img>Upload Photo</button>
            </div>

            <div className="createprofilecard__field-container">  
              <h4 className="createprofilecard__field-title">Personal Info</h4> 
                <div className="createprofilecard__field">
                    <h5 className="createprofilecard__field-text">Full Name</h5>
                    <a href="" className="createprofilecard__field-link">
                        <div className="createprofilecard__field-link-container">
                            <p className="createprofilecard__field-link-txt">Fauzan Farrel</p>
                            <img className="createprofilecard__field-link-arrow" src={Arrow} alt=""/>
                        </div>
                    </a>
                </div>

                <div className="createprofilecard__field">
                    <h5 className="createprofilecard__field-text">Address</h5>
                    <a href="" className="createprofilecard__field-link">
                        <div className="createprofilecard__field-link-container">
                            <p className="createprofilecard__field-link-txt">Jakartuy</p>
                            <img className="createprofilecard__field-link-arrow" src={Arrow} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="createprofilecard__field-container">  
              <h4 className="createprofilecard__field-title">Contact Info</h4> 
                <div className="createprofilecard__field">
                    <h5 className="createprofilecard__field-text">Email</h5>
                    <a href="" className="createprofilecard__field-link">
                        <div className="createprofilecard__field-link-container">
                            <p className="createprofilecard__field-link-txt">FauzanFarrel@gmail.com</p>
                            <img className="createprofilecard__field-link-arrow" src={Arrow} alt=""/>
                        </div>
                    </a>
                </div>

                <div className="createprofilecard__field">
                    <h5 className="createprofilecard__field-text">Telephone Number</h5>
                    <a href="" className="createprofilecard__field-link">
                        <div className="createprofilecard__field-link-container">
                            <p className="createprofilecard__field-link-txt">081246716273</p>
                            <img className="createprofilecard__field-link-arrow" src={Arrow} alt=""/>
                        </div>
                    </a>
                </div>
            </div>

            <div className="createprofilecard__upload-field">
                <h4 className="createprofilecard__upload-field-title">Training And Education</h4>
                <p className="createprofilecard__upload-field-text">Workers with this information got employed 10x faster</p>
                <a href="" className="createprofilecard__upload-field-link"><img src={AddBtn}></img> Ceritakan tentang Saya</a>
            </div>

            <div className="createprofilecard__upload-field">
                <h4 className="createprofilecard__upload-field-title">Work Experience</h4>
                <p className="createprofilecard__upload-field-text">Workers with this information got employed 5x faster</p>
                <a href="" className="createprofilecard__upload-field-link"><img src={AddBtn}></img> Tambahkan Pengalaman Kerja</a>
            </div>

            <div className="createprofilecard__upload-credential-field">
                <h4 className="createprofilecard__upload-field-title" >Identity and credential</h4>
                 <div className="createprofilecard__upload-credential-field-container">
                    <div className="createprofilecard__upload-credential-field-container-single">
                            <h5>ID Photo</h5>
                            <div className="createprofilecard__upload-credential-img-container">
                                <button className="createprofilecard__upload-credential-btn">
                                    <img className="createprofilecard__upload-credential-btn-icon"src={Photo}></img>
                                </button>
                            </div>
                    </div>
                    <div className="createprofilecard__upload-credential-field-container-single">
                            <h5>SKCK</h5>
                            <div className="createprofilecard__upload-credential-img-container">
                                <button className="createprofilecard__upload-credential-btn">
                                    <img className="createprofilecard__upload-credential-btn-icon"src={Photo}></img>
                                </button>
                            </div>
                    </div>
                </div>

                <div className="createprofilecard__upload-credential-field-container">
                    <div className="createprofilecard__upload-credential-field-container-single">
                            <h5>ID Photo</h5>
                            <div className="createprofilecard__upload-credential-img-container">
                                <button className="createprofilecard__upload-credential-btn">
                                    <img className="createprofilecard__upload-credential-btn-icon"src={Photo}></img>
                                </button>
                            </div>
                    </div>
                    <div className="createprofilecard__upload-credential-field-container-single">
                            <h5>SKCK</h5>
                            <div className="createprofilecard__upload-credential-img-container">
                                <button className="createprofilecard__upload-credential-btn">
                                    <img className="createprofilecard__upload-credential-btn-icon"src={Photo}></img>
                                </button>
                            </div>
                    </div>
                </div>

            </div>

            <div className="createprofilecard__upload-field">
                <h4 className="createprofilecard__upload-field-title">Galley & Certificates</h4>
                <p className="createprofilecard__upload-field-text">Unggah berkas Edukasi dan sertifikasi Anda</p>
                <a href="" className="createprofilecard__upload-field-link"><img src={AddBtn}></img> Unggah Edukasi dan Sertifikasi </a>
            </div>

            <div className="createprofilecard__field">
                    <h5 className="createprofilecard__field-text">Languages</h5>
                    <a href="" className="createprofilecard__field-link">
                        <div className="createprofilecard__field-link-container">
                            <p className="createprofilecard__field-link-txt">Indonesia - Lancar</p>
                            <img className="createprofilecard__field-link-arrow" src={Arrow} alt=""/>
                        </div>
                    </a>
                </div>

        </div>
        );
}


export default CreateProfileCard;