import React from 'react';
import './job-card.styles.scss';
import CoffeeFill from '../../assets/coffee-fill.jpg';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';

class JobCard extends React.Component {
    state ={

    }
    render(){
        return (
            <div className="jobCard">
                <img className="jobCard__img" src={CoffeeFill}></img>
                <div className="jobCard__detail">
                    <h6 className="jobCard__detail-jobtype">Barista</h6>
                    <h3 className="jobCard__detail-jobsalary">Rp.500.000 per hari</h3>
                    <p  className="jobCard__detail-jobdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.</p>
                </div>
                <div className="jobCard__info">
                    <div className="jobCard__info-rating">
                        <div className="jobCard__info-rating--star-container">
                        <img className ="jobCard__info-rating--star" src={RatingActive}></img>
                        <img className ="jobCard__info-rating--star" src={RatingActive}></img>
                        <img className ="jobCard__info-rating--star" src={RatingActive}></img>
                        <img className ="jobCard__info-rating--star" src={RatingActive}></img>
                        <img className ="jobCard__info-rating--star" src={RatingPassive}></img>
                        </div>
                        <p className="jobCard__info-rating--text">(100)</p>
                    </div>

                    <button className="btn btn-outline-info">Koki <img className="btn-logo" src={CheffHat}></img></button>

                </div>
            </div>
        );
    }
}

export default JobCard;