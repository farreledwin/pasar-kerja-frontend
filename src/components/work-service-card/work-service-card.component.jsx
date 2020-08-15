import React from 'react';
import './work-service-card.styles.scss';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';

class WorkServiceCard extends React.Component {
    state ={

    }
    render(){
        return (
           <div className="workservicecard">
                <div className="workservicecard__status">
                    <h5>Waiting For Payment</h5>
                </div>

                <div className="workservicecard__desc">
                    <img className="workservicecard__desc-img" src={CoffeeFill}></img>

                    <div className="workservicecard__desc-detail">
                        <h6 className="workservicecard__desc-detail--title">Barista</h6>
                        <h4 className="workservicecard__desc-detail--salary">Rp.500.000 per hari</h4>
                        <p className="workservicecard__desc-detail--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
                        <div className="workservicecard__desc-detail-footer">
                            <div className="workservicecard__desc-detail-footer--rating">
                                <img src={RatingActive} className="workservicecard__desc-detail-footer--rating-star"></img>
                                <img src={RatingActive} className="workservicecard__desc-detail-footer--rating-star"></img>
                                <img src={RatingActive} className="workservicecard__desc-detail-footer--rating-star"></img>
                                <img src={RatingActive} className="workservicecard__desc-detail-footer--rating-star"></img>
                                <img src={RatingPassive} className="workservicecard__desc-detail-footer--rating-star"></img>
                                <p className="workservicecard__desc-detail-footer--rating-text">(100)</p>
                            </div>

                            <button className="btn btn-outline-info">Koki <img className="btn-logo" src={CheffHat}></img></button>
                        </div>
                    </div>
                </div>

                <a className="workservicecard__cancel-link" href="">Hapus Iklan</a>
                <a className="workservicecard__nonactive-link" href="">Non-aktifkan Iklan</a>
           </div>
        );
    }
}

export default WorkServiceCard;