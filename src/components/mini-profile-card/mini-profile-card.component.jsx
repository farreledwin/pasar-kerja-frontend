import React from 'react';
import './mini-profile-card.styles.scss';
import LocationLogo from '../../assets/after-jobdetailpage/location_icon.png';
import Ceklis from '../../assets/after-jobdetailpage/ceklis.png';

const MiniProfileCard = ({data}) => {

        return (
            <div className="miniprofilecard">
                <div className="miniprofilecard__main-container">
                <div className = "miniprofilecard__title-container">
                  <div className="miniprofilecard__title">
                     <h2 className = "miniprofilecard__title--name">{data.user.first_name} {data.user.last_name}</h2>
                  </div>

                  <img className="miniprofilecard__img" src="https://media-exp1.licdn.com/dms/image/C5103AQHeecoH0lILHQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=mJ3mdcUvkbXOhX6ws_tDLd9F1o6BG7GM62CHXUXa5P0"></img>
                </div>

                <div className="miniprofilecard__description-container">
                    <h5 className="miniprofilecard__description-title">Address</h5>
                    <p className="miniprofilecard__description-text">{data.user.address} xxxxx xxxx xxxx</p>
                </div>

                <div className="miniprofilecard__description-container">
                    <h5 className="miniprofilecard__description-title" >Telephone Number</h5>
                    <p className="miniprofilecard__description-text">{data.user.phone_number}xxxxxx</p>
                </div>
                </div>

                <div className="miniprofilecard__link-container">
                    <a className="miniprofilecard__link" href="">Visit Profile</a>
                </div>
            </div>
        );
    }

export default MiniProfileCard