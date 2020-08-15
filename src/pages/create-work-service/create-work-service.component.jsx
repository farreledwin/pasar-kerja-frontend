import React,{ useState } from 'react';
import './create-work-service.styles.scss';
import CreateWorkServiceCard from '../../components/create-work-service-card/create-work-service-card.component';
import { connect } from 'react-redux';
import { startInsertJob } from '../../redux/joblist/joblist.action';

const CreateWorkService = ({ startInsertJob }) => {
	const [ show, setShow ] = useState({
		service: false,
		workhours: false,
		workcategory: false,
		price: false,
		description: false
	});
	const [ data, setData ] = useState({
		serviceName: '',
		start_time_range: '',
		finish_time_range: '',
		workcategory: 'koki',
		salary: '',
		discount: '',
		serviceDescription: '',
		job_image: ''
	});

	const getBase64 = (e) => {
		var file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setData({ ...data, job_image: reader.result });
			console.log(data);
		};
		reader.onerror = function(error) {
			console.log('Error: ', error);
		};
	};
	const {
		serviceName,
		start_time_range,
		finish_time_range,
		workcategory,
		salary,
		discount,
		serviceDescription,
		job_image
	} = data;

	const handleClose = () => {
		setShow(false);
	};
	const handleServiceShow = () => {
		setShow({ ...show, service: true });
	};
	const handleWorkHoursShow = () => {
		setShow({ ...show, workhours: true });
	};
	const handleWorkCategoryShow = () => {
		setShow({ ...show, workcategory: true });
	};
	const handlePriceShow = () => {
		setShow({ ...show, price: true });
	};
	const handleDescriptionShow = () => {
		setShow({ ...show, description: true });
	};

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
		console.log(data);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		startInsertJob(
			serviceName,
			start_time_range,
			finish_time_range,
			workcategory,
			salary,
			discount,
			serviceDescription,
			job_image
		);
	};
	return (
		<div className="createworkservice">
			<h1 className="createworkservice__text">Create Work / Service</h1>
			<div className="createworkservice__container">
				<div className="createworkservice__insert--container">
					<CreateWorkServiceCard
						show={show}
						data={data}
						getBase64={getBase64}
						handleClose={handleClose}
						handleServiceShow={handleServiceShow}
						handleWorkHoursShow={handleWorkHoursShow}
						handleWorkCategoryShow={handleWorkCategoryShow}
						handlePriceShow={handlePriceShow}
						handleDescriptionShow={handleDescriptionShow}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</div>

				<div className="createworkservice__btn--container">
					<button type="submit" onClick={handleSubmit} className="createworkservice__btn">
						Post Work
					</button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
    startInsertJob: (	serviceName,start_time_range,finish_time_range,workcategory,salary,discount,serviceDescription,job_image) => dispatch(startInsertJob({serviceName,
        start_time_range,
        finish_time_range,
        workcategory,
        salary,
        discount,
        serviceDescription,
        job_image}))
})

export default connect(null,mapDispatchToProps)(CreateWorkService);
