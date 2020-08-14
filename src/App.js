import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import { connect } from 'react-redux';
import { isLoggedInOrNot } from '../src/redux/user/user.actions';
import Footer from '../src/components/after/footer/footer.component';
import {withRouter} from 'react-router-dom';
import Header from './components/header/header.component';

const App = ({ loginOrNot,location}) => {
	useEffect(() => {
		loginOrNot();
	});
	console.log(location.pathname);
	return (
		<div>
			{location.pathname === '/' || location.pathname == '/findworker' ? null : <Header/> }
			<Switch>
				<Route exact path="/" component={HomePage} />
        </Switch>
			<Footer/>
		</div>
	);
};

const AppWithRouter = withRouter(App);
const mapDispatchToProps = (dispatch) => ({
	loginOrNot: () => dispatch(isLoggedInOrNot())
});

export default connect(null, mapDispatchToProps)(AppWithRouter);