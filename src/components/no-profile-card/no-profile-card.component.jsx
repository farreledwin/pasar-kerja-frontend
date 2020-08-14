import React from 'react';
import './no-profile-card.styles.scss';

class NoProfileCard extends React.Component {
    state ={

    }
    render(){
        return (
            <div className="noprofilecard">
            <div className="noprofilecard__main-container">
            <div className = "noprofilecard__title-container">
              <div className="noprofilecard__title">
                 <h2 className = "noprofilecard__title--name">Fauzan Farrel</h2>
              </div>

              <img className="noprofilecard__img" src="https://media-exp1.licdn.com/dms/image/C5103AQHeecoH0lILHQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=mJ3mdcUvkbXOhX6ws_tDLd9F1o6BG7GM62CHXUXa5P0"></img>
            </div>
            </div>

            

            <div className="noprofilecard__link-container">
                <a className="noprofilecard__link" href="">Complete Profile</a>
            </div>
        </div>
        );
    }
}

export default NoProfileCard;