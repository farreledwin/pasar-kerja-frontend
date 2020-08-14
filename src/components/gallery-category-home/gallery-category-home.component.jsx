import React from 'react';
import './gallery-category-home.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectAllDataJobCategory} from '../../redux/jobcategory/jobcategory.selectors';
import GalleryCategoryItem from '../gallery-category-home-item/gallery-category-home-item.component';

const GalleryCategoryHome = ({jobcategory}) => (
	<div class="row">
		{jobcategory.map((data) => <GalleryCategoryItem jobcategory={data} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	jobcategory: selectAllDataJobCategory
});

export default connect(mapStateToProps)(GalleryCategoryHome);
