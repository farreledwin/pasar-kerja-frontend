import React from 'react';
import './jobdetail-card-main.styles.scss';
import CheffHat from '../../assets/after-jobdetailpage/cheff-hat.png';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import ProfileCardMini from '../profile-card-mini/profile-card-mini.component';

const JobDetailCardMain = (props) => {
    const jobRating = parseInt(props.job.job_rating);
    return (
                <div className="jobdetail--card-main">
                    <div className="jobdetail--card-main__img-container">
                        <img className="jobdetail--card-main__img" src={props.job.job_image}></img>
                    </div>

                    <div className="jobdetail--card-main__title-container">
                        <div className="jobdetail--card-main__title">
                            <h2>{props.job.job_name}</h2>
                            <p>{props.job.job_time_range} 
                                <span class="pad-5">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
                                    </svg>
                                </span>
                                 {props.job.job_hour}
                                <span class="pad-5">
                                     <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
                                     </svg>
                                </span>
                                <button className="btn btn-outline-info">Koki <img className="btn-logo" src={CheffHat}></img></button>
                                </p>
                        </div>
                            <div className="jobdetail--card-main__rating">
                                <div className="jobdetail--card-main__rating-container">
                                {Array.from({length:jobRating}).map(() => 
                                  <img className="jobdetail--card-main__rating-active" src={RatingActive}></img>
                                )}   
                                <h4>{props.job.job_review}</h4>       
                                </div>
                            </div>
                    </div>

                    <hr className="basic-line"></hr>

                    <div className="jobdetail--card-main__description">
                        <div className="jobdetail--card-main__description-container">
                            <h3>Service Description</h3>
                            <p>{props.job.job_description}
                            </p>
                        </div>
                    </div>

                    <ProfileCardMini job={props.job} />
                    
                </div>
        );
    }

export default JobDetailCardMain;