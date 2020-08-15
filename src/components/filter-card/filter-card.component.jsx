import React from 'react';
import './filter-card.styles.scss';


const FilterCard = ({handleChange,filter}) => {
        return (
           <div className="filtercard">
               <h6>Filter</h6>
               <hr></hr>

               <div className="filtercard__button-container">
                    <button  type="submit" onClick={handleChange} value="" className={`filtercard__button filtercard__button${filter === '' ? '--active' : ''}`}>All</button>
                    <button  type="submit" onClick={handleChange} value="Waiting for Confirmation" className={`filtercard__button filtercard__button${filter === 'Waiting for Confirmation' ? '--active': ''}`}>Waiting for Confirmation</button>
                    <button  type="submit" onClick={handleChange} value="Work in Progress" className={`filtercard__button filtercard__button${filter === 'Work in Progress' ? '--active': ''}`}>Work In Progress</button>
                    <button  type="submit" onClick={handleChange} value="Finished Work" className={`filtercard__button filtercard__button${filter === 'Finished Work' ? '--active': ''}`}>Finished Work</button>
               </div>
           </div>
        );
    }
   

export default FilterCard;