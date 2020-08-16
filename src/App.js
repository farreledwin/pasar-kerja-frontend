import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import { connect } from 'react-redux';
import { isLoggedInOrNot } from '../src/redux/user/user.actions';
import Footer from '../src/components/footer/footer.component';
import {withRouter} from 'react-router-dom';
import Header from './components/header/header.component';
import JobList from './pages/job-list/job-list.component';
import JobDetail from './pages/job-detail/job-detail.component';
import PaymentDetail from './pages/payment-detail/payment-detail.component';
import PaymentDetailTime from './pages/payment-detail-time/payment-detail-time.component';
import ProfilePage from './pages/profile-page/profile-page.component';
import CreateProfile from './pages/create-profile/create-profile.component';
import CreateWorkService from './pages/create-work-service/create-work-service.component';
import WorkServiceList from './pages/work-service-list/work-service-list.component';
import WorkOrderList from './pages/work-order-list/work-order-list.component';
import OrderList from './pages/order-list/order-list.component';
import HeaderType3 from './components/header-type-3/header-type-3.component';
import {selectUserData} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
const App = ({ loginOrNot,location,user}) => {
	useEffect(() => {
		loginOrNot();
	},[]);
	return (
		<div>
			
			{user.email === 'farrel206@gmail.com' && location.pathname === '/' || location.pathname == '/findworker' ? null :  location.pathname !== '/findworker' && user.email === 'farrel206@gmail.com' ? <HeaderType3/> : <Header/> }
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/findworker" component={HomePage} />
				<Route exact path="/joblist" component={JobList}/>
				<Route exact path="/job-detail/:jobId" component={JobDetail}/>
				<Route exact path="/job-detail" component={JobDetail}/>
				<Route exact path="/payment-detail" component={PaymentDetail}/>
				<Route exact path="/payment-detail-time" component={PaymentDetailTime}/>
				<Route exact path="/profile" component={ProfilePage}/>
				<Route exact path="/order-list" component={OrderList}/>
				<Route exact path="/work-service-list" component={WorkServiceList}/>
				<Route exact path="/work-order-list" component={WorkOrderList}/>
				<Route exact path="/create-work-service" component={CreateWorkService}/>
				<Route exact path="/create-profile" component={CreateProfile}/>
			</Switch>
			<Footer/>
		</div>
	);
};

const AppWithRouter = withRouter(App);
const mapStateToProps = createStructuredSelector({
	user: selectUserData
})
const mapDispatchToProps = (dispatch) => ({
	loginOrNot: () => dispatch(isLoggedInOrNot())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithRouter);
