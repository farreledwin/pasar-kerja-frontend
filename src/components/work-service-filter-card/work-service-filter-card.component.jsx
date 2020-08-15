import React from 'react';
import './work-service-filter-card.styles.scss';


class WorkServiceFilterCard extends React.Component {
    state ={

    }
    render(){
        return (
           <div className="workservicefiltercard">
               <h6>Work Status</h6>
               <hr></hr>

               <div className="workservicefiltercard__button-container">
                    <button className="workservicefiltercard__button workservicefiltercard__button--active">All Work</button>
                    <button className="workservicefiltercard__button">Active Work</button>
                    <button className="workservicefiltercard__button">Inactive Work</button>
                    <button className="workservicefiltercard__button">Work History</button>
               </div>
           </div>
        );
    }
}

export default WorkServiceFilterCard;