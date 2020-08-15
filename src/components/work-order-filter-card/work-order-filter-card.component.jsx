import React from 'react';
import './work-order-filter-card.styles.scss';
import RatingActive from '../../assets/after-jobdetailpage/rating-active.png';
import RatingPassive from '../../assets/after-jobdetailpage/rating-passive.png';

class WorkOrderFilterCard extends React.Component {
    state ={

    }
    render(){
        return (
           <div className="workorderfiltercard">
                <div className="workorderfiltercard__profile">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="workorderfiltercard__profile-img" src="https://media-exp1.licdn.com/dms/image/C5103AQHeecoH0lILHQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=mJ3mdcUvkbXOhX6ws_tDLd9F1o6BG7GM62CHXUXa5P0"></img>
                        </div>

                        <div className="col-md-9">
                            <h5>Fauzan Farrel</h5>
                            <div className="workorderfiltercard__profile-rating">
                            <img className ="workorderfiltercard__profile-rating-active" src={RatingActive}></img>
                            <img className ="workorderfiltercard__profile-rating-active" src={RatingActive}></img>
                            <img className ="workorderfiltercard__profile-rating-active" src={RatingActive}></img>
                            <img className ="workorderfiltercard__profile-rating-active" src={RatingActive}></img>
                            <img className ="workorderfiltercard__profile-rating-passive" src={RatingPassive}></img>
                            <p>(100)</p>
                        </div>
                     </div>
                    </div>

                    <div className="workorderfiltercard__profile-balance">
                            <p className="workorderfiltercard__profile-balance-title">Saldo:</p>
                            <p className="workorderfiltercard__profile-balance-credit">Rp.105.000</p>
                    </div>
                </div>
               
            

               <hr className="basic-line"></hr>

               <div className="workorderfiltercard__button-container">
                    <button className="workorderfiltercard__button workorderfiltercard__button--active">All Work</button>
                    <button className="workorderfiltercard__button">New Work Order</button>
                    <button className="workorderfiltercard__button">Accepted Work Order</button>
                    <button className="workorderfiltercard__button">Work In Progress</button>
                    <button className="workorderfiltercard__button">Decline Work Orders</button>
                    <button className="workorderfiltercard__button">Work History</button>
               </div>
           </div>
        );
    }
}

export default WorkOrderFilterCard;