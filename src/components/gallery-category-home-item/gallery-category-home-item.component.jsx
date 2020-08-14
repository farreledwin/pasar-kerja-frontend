import React from 'react';
import '../gallery-category-home/gallery-category-home.styles.scss';

const GalleryCategoryItem = ({ jobcategory }) => {
	return (
		<div class="col-sm-2">
			<div class="image-icon text-center">
				<img src={jobcategory.category_image} />
			</div>
			<div class="text-icon text-center">
				<p>{jobcategory.category_name}</p>
			</div>
		</div>
	);
};
export default GalleryCategoryItem;
