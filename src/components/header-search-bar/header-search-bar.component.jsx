import React,{useEffect,useState} from 'react';
import './header-search-bar.styles.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {startSearchingJob} from '../../redux/joblist/joblist.action';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
const borderWhatJobStyle = {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0'
};

const borderWhereJobStyle = {
	borderRadius: '0'
};


const HeaderSearchBar = ({startSearchingJob,history}) => {
	const[searchData,setSearchData] = useState({category:null,city:null});
	const [searchInput,setSearchInput] = useState({categoryInput: null,cityInput:null});
	const {category,city} = searchData;
	const {categoryInput, cityInput} = searchInput;

	const handleChange = (event) => {
		setSearchInput({...searchInput, [event.target.name]: event.target.value});
		console.log(searchInput);
	}

	const handleCategory = (event,value) => {
		setSearchInput({...searchInput, categoryInput: value})
		console.log(searchInput)
	}

	const handleCity = (event,value) => {
		setSearchInput({...searchInput, cityInput: value})
		console.log(searchInput)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		startSearchingJob(categoryInput,cityInput);
		history.push('/joblist');
	}


	useEffect( () => {
		async function fetchApi() {
			const res = await axios.all([axios.get(process.env.REACT_APP_DEFAULT_API+"/showjobcategory"),axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")]);
		 setSearchData({city:res[1].data.provinsi,category: res[0].data.payload.data});
		}
		fetchApi();
	},[])
	return (
		<div>
		{category === null || city=== null ? <div>loading</div>: <div className="header__logo">
		<div className="header__searchbar">
			<div className="header__searchbar__inputjob">
				<div className="form-group">
				<Autocomplete
        id="free-solo-demo"
		freeSolo
		onChange={handleCategory}
		name="categoryInput"
        options={category.map((option) => option.category_name)}
        renderInput={(params) => (
          <TextField {...params} label="Find Work" onChange={handleChange}  name="categoryInput" className="custom-width-autocomplete" margin="normal" variant="outlined" />
        )}
      />
				</div>
				<div className="form-group">
				<Autocomplete
        id="free-solo-demo"
		freeSolo
		onChange={handleCity}
        options={city.map((option) => option.nama)}
        renderInput={(params) => (
          <TextField {...params} label="Find Location" onChange={handleChange} name="cityInput" className="custom-width-autocomplete" margin="normal" variant="outlined" />
        )}
      />
				</div>
				<div className="form-group background-header-button-change">
					<button type="submit" onClick={handleSubmit}>
						<p>&#xf002;</p>
					</button>
				</div>
			</div>
		</div>
	</div>
	} 
		
	</div>
	)
}
const mapDispatchToProps = (dispatch) => ({
	startSearchingJob: (categoryInput,cityInput) => dispatch(startSearchingJob({categoryInput,cityInput}))
})

const HeaderSearchBarWithRouter = withRouter(HeaderSearchBar);
export default connect(null,mapDispatchToProps)(HeaderSearchBarWithRouter);
