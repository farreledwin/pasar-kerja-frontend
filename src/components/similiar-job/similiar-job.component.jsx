import React from 'react';
import './similiar-job.styles.scss';
import JobCard from '../../components/job-card/job-card.component';


class SimiliarJob extends React.Component {
    state ={

    }
    render(){
        return (
            <div className="similiar-job">
                <h5>Pekerjaan Yang Mirip</h5>
                    <div className="similiar-job__list">
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
            </div>
        );
    }
}

export default SimiliarJob;