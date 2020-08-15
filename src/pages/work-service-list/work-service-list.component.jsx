import React from 'react';
import './work-service-list.styles.scss';
import WorkServiceFilterCard from '../../components/work-service-filter-card/work-service-filter-card.component';
import WorkServiceCard from '../../components/work-service-card/work-service-card.component';
import WorkServiceNonCard from '../../components/work-service-non-card/work-service-non-card.component';

const WorkServiceList = () => {
    
	return (
		<div>
            
			<div className="workservicelist">
				<div>
					<h1 className="workservicelist__title">Your Work & Service</h1>
					<div className="workservicelist__item">
                    <WorkServiceNonCard/>
					</div>
				</div>

				<div className="workservicelist__filter">
					<WorkServiceFilterCard />
				</div>
			</div>
		</div>
	);
};

export default WorkServiceList;
