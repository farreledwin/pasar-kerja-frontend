import React from 'react';
import './profile-card.styles.scss';
import LocationLogo from '../../assets/after-jobdetailpage/location_icon.png';
import Ceklis from '../../assets/after-jobdetailpage/ceklis.png';


class ProfileCard extends React.Component {
    state ={

    }
    render(){
        return (
            <div className="profilecard">
                <div className="profilecard__main-container">
                <div className = "profilecard__title-container">
                  <div className="profilecard__title">
                     <h2 className = "profilecard__title--name">Fauzan Farrel</h2>
                     <div className="profilecard__title-location">
                        <img className ="profilecard__title-location--img" src={LocationLogo} alt=""/><h5>Jakarta</h5>
                     </div>
                  </div>

                  <img className="profilecard__img" src="https://media-exp1.licdn.com/dms/image/C5103AQHeecoH0lILHQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=mJ3mdcUvkbXOhX6ws_tDLd9F1o6BG7GM62CHXUXa5P0"></img>
                </div>

                <div className="profilecard__description-container">
                    <h5 className="profilecard__description-title">About me</h5>
                    <p className="profilecard__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
                </div>

                <div className="profilecard__description-container">
                    <h5 className="profilecard__description-title" >Work Experience</h5>
                    <p className="profilecard__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
                </div>

                <div className="profilecard__achievement">
                    <h5>Identity And Credentials</h5>
                        <div className="profilecard__achievement-list">
                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    KTP
                                </h6>

                                <img className="profilecard__achievement-check" src={Ceklis}></img>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SKCK
                                </h6>

                                <img className="profilecard__achievement-check" src={Ceklis}></img>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SIM A
                                </h6>

                                <img className="profilecard__achievement-check" src={Ceklis}></img>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SIM B
                                </h6>

                                <img className="profilecard__achievement-check" src={Ceklis}></img>
                            </div>
                        </div>
                 </div>


                 <div className="profilecard__achievement">
                    <h5>Education And Training</h5>
                        <div className="profilecard__achievement-list">
                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SD Auliya
                                </h6>

                                <p className="profilecard__achievment-date">2005-2011</p>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SMP Annissa
                                </h6>

                                <p className="profilecard__achievement-date">2011-2014</p>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    SMA Pembangunan Jaya
                                </h6>

                                <p className="profilecard__achievement-date">2014-2017</p>
                            </div>
                        </div>
                  </div>

                  <div className="profilecard__achievement">
                    <h5>Gallery and Certification</h5>
                        <div className="profilecard__achievement-list">
                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    Barista Sertification
                                </h6>

                                <a href="" className="profilecard__achievement-certification-link">Lihat</a>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    Cashier Sertification
                                </h6>

                                <a href="" className="profilecard__achievement-certification-link">Lihat</a>
                            </div>
                        </div>
                  </div>


                  <div className="profilecard__achievement">
                    <h5>Languages</h5>
                        <div className="profilecard__achievement-list">
                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    Indonesia
                                </h6>

                                <p className="profilecard__achievement-languages-status">Lancar</p>
                            </div>

                            <hr></hr>

                            <div className="profilecard__achievement-item">
                                <h6 className="profilecard__achievement-name">
                                    English
                                </h6>

                                <p className="profilecard__achievement-languages-status">Lancar Bingit</p>
                            </div>
                        </div>
                  </div>

                </div>

                

                <div className="profilecard__link-container">
                    <a className="profilecard__link" href="">Visit Profile</a>
                </div>
            </div>
        );
    }
}

export default ProfileCard;