import React from 'react';
import './create-work-service.styles.scss';
import CreateWorkServiceCard from '../../components/create-work-service-card/create-work-service-card.component';


class CreateWorkService extends React.Component {
    state ={

    }
    render(){
        return (
        <div className="createworkservice">
            <h1 className="createworkservice__text">Create Work / Service</h1>
            <div className="createworkservice__container">
                <div className="createworkservice__insert--container">
                    <CreateWorkServiceCard />
                </div>

                <div className="createworkservice__btn--container">
                    <button className="createworkservice__btn">Post Work</button>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateWorkService;