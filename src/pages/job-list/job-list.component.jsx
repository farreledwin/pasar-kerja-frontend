import React, { useState, useEffect } from 'react';
import './job-list.styles.scss';
import Form from 'react-bootstrap/Form';
import ActiveJobDetailCompany from '../../components/active-job-detailcompany/activejob-detailcompany.component';
import { connect } from 'react-redux';
import { startFetchJobList } from '../../redux/joblist/joblist.action';
import { createStructuredSelector } from 'reselect';
import { selectAllDataJobList, selectSearchData } from '../../redux/joblist/joblist.selectors';
import { extendMoment } from 'moment-range';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import DropDownPrice from '../../components/dropdown-price/dropdown-price.component';
import SortDropDown from '../../components/sort-dropdown/sort-dropdown.component';
import LoadingScreen from 'react-loading-screen';
import logoMiniTransparent from '../../assets/logo-mini-transparent.png';
const JobList = ({ startFetchJobList, datajob, datasearch }) => {
	const [ buttonValue, setButtonValue ] = useState({ value: '' });
	const { value } = buttonValue;
	const [ dates, setDates ] = useState(null);
	const [ isOpenDate, setOpenDate ] = useState(false);
	const [ isOpenPrice, setOpenPrice ] = useState(false);
	const [ price, setPrice ] = useState({ start_price: '', end_price: '' });
	const [ sort, setSort ] = useState(null);
	const [ isOpenSort, setOpenSort ] = useState(false);

	const { start_price, end_price } = price;

	const onSelect = (dates) => {
		setDates(dates);
		console.log(dates.start._d);
		if (dates.end._d !== null) {
			isOpenDateStatus(!isOpenDate);
		}
	};

	const isOpenPriceStatus = () => {
		setOpenPrice(!isOpenPrice);
	};

	const isOpenDateStatus = () => {
		setOpenDate(!isOpenDate);
	};

	const isOpenSortStatus = () => {
		setOpenSort(!isOpenSort);
	};

	const onChangeSort = (event) => {
		setSort(event.target.value);
		setOpenSort(!isOpenSort);
	};

	const onChangePrice = (evt) => {
		console.log(evt.target.name);
		if (evt.target.name === 'minprice') {
			setPrice({ ...price, start_price: evt.target.value });
		} else if (evt.target.name === 'maxprice') {
			setPrice({ ...price, end_price: evt.target.value });
		} else {
			setPrice({ start_price: '', end_price: '' });
		}
	};

	useEffect(
		() => {
			if (dates === null) {
				startFetchJobList(null, null, start_price, end_price, sort);
			} else {
				startFetchJobList(
					moment(dates.start._d).format('YYYY-MM-DD'),
					moment(dates.end._d).format('YYYY-MM-DD'),
					start_price,
					end_price,
					sort
				);
			}
		},
		[ dates, price, sort ]
	);
	// const handleButtonChangeValue = async (event) => {
	// 	setButtonValue({ ...buttonValue, value: event.target.value });
	// };
	return (
		<div>
			{datajob.length === 0 ? (
				<LoadingScreen
					loading={true}
					bgColor="#f1f1f1"
					spinnerColor="#9ee5f8"
					textColor="#676767"
					logoSrc={logoMiniTransparent}
					text="Loading...Please Wait!"
				/>
			) : (
				<div className="content-container">
					<div className="buttonContainer">
						<Form.Group>
							<button
								type="button"
								name="pricerange"
								className="btn btn-outline-secondary btn-nonActive btn-newStyle"
								onClick={isOpenPriceStatus}
								value="Price"
							>
								{price.start_price !== '' && price.end_price !== '' ? (
									price.start_price + '-' + price.end_price
								) : (
									'Price'
								)}
							</button>
							{isOpenPrice === true ? (
								<DropDownPrice onChange={onChangePrice} isOpen={isOpenPriceStatus} value={price} />
							) : null}
						</Form.Group>
						<button
							type="button"
							name="startnow"
							className="btn btn-outline-secondary btn-nonActive btn-newStyle"
							onClick={isOpenDateStatus}
							value="Date"
						>
							{dates !== null ? (
								moment(dates.start._d).format('YYYY-MM-DD') +
								'-' +
								moment(dates.end._d).format('YYYY-MM-DD')
							) : (
								'Date'
							)}
						</button>
						{isOpenDate === true ? <DateRangePicker onSelect={onSelect} value={dates} /> : null}
						<button
							type="button"
							name="startnow"
							className="btn btn-outline-secondary btn-nonActive btn-newStyle"
							value="Sort"
							onClick={isOpenSortStatus}
						>
							{sort !== null ? sort : 'Sort'}
						</button>
						{isOpenSort !== false ? <SortDropDown onChange={onChangeSort} /> : null}
						{/* <button type="button" name="startnow" className="btn btn-outline-secondary btn-nonActive" onClick={handleButtonChangeValue} value="mulai_sekarang">
			  <svg
				  className="btn-svg"
				  width="15"
				  height="16"
				  viewBox="0 0 15 16"
				  fill="none"
				  xmlns="http://www.w3.org/2000/svg"
			  >
				  <path
					  fill-rule="evenodd"
					  clip-rule="evenodd"
					  d="M12.115 2.61199L12.64 1.79999L13.49 2.35399L13.974 1.60399L11.527 0.0109863L11.044 0.760986L11.893 1.31399L11.381 2.10199C10.2152 1.382 8.87224 1.00013 7.50202 0.998986C3.38702 0.998986 0.0410156 4.35199 0.0410156 8.47499C0.0410156 12.595 3.38702 15.949 7.50202 15.949C11.615 15.949 14.963 12.595 14.963 8.47499C14.9627 7.34595 14.7062 6.23169 14.2129 5.21613C13.7196 4.20056 13.0023 3.31017 12.115 2.61199ZM7.50202 14.011C4.45502 14.011 1.97502 11.523 1.97502 8.46699C1.97502 5.40899 4.45502 2.92199 7.50202 2.92199C10.549 2.92199 13.029 5.40899 13.029 8.46699C13.029 11.522 10.549 14.011 7.50202 14.011Z"
					  fill="black"
				  />
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4H8V9H7V4Z" fill="black" />
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8H10V9H7V8Z" fill="black" />
			  </svg>
			  Mulai Sekarang
		  </button>
		  <button type="button" name="no_exp" className="btn btn-outline-secondary btn-nonActive" onClick={handleButtonChangeValue} value="no_required">
			  {' '}
			  Tanpa Pengalaman
		  </button>
		  <button type="button" name="recommendation" className="btn btn-outline-secondary btn-nonActive" onClick={handleButtonChangeValue} value="rekomendasi">
			  {' '}
			  Rekomendasi
		  </button> */}
					</div>
					<hr className="hr-medium" />
					<div className="job-container">
						<h1 className="job-header">Pekerjaan di Jakarta</h1>

						<div className="job-list-container">
							{datasearch !== null ? (
								datajob
									.filter(
										(item) =>
											item.job_category === datasearch.categoryInput ||
											item.job_city === datasearch.cityInput
									)
									.map((job) => <ActiveJobDetailCompany key={job.id} job={job} />)
							) : (
								datajob.map((job) => <ActiveJobDetailCompany key={job.id} job={job} />)
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	datajob: selectAllDataJobList,
	datasearch: selectSearchData
});

const mapDispatchToProps = (dispatch) => ({
	startFetchJobList: (start_date, end_date, start_price, end_price, sort) =>
		dispatch(startFetchJobList({ start_date, end_date, start_price, end_price, sort }))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
