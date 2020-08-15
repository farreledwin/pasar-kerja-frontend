import React, { useEffect } from 'react';
import './profile-page.styles.scss';
import ProfileCard from '../../components/profile-card/profile-card.component';
import ShareCvCard from '../../components/share-cv-card/share-cv-card.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProfileUser } from '../../redux/user/user.selectors';
import { selectUserData } from '../../redux/user/user.selectors';
import { startFetchProfile } from '../../redux/user/user.actions';
const ProfilePage = ({ profile, user, startFetchProfile }) => {
	const { email } = user;

	useEffect(
		() => {
			if (user !== null) {
				startFetchProfile(email);
			}
		},
		[ user ]
	);
	return (
		<div className="profilepage">
			{profile === null ? (
				<div>loading</div>
			) : (
				<div className="profilepage__container">
					<div className="profilepage__profilecard--container">
						<h1 className="profilepage__text">Profile</h1>
						<ProfileCard profile={profile} />
					</div>

					<div className="profilepage__sharecard-container">
						<div>
							<ShareCvCard />
						</div>
						<button className="profilepage__btn">Ubah</button>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	profile: selectProfileUser,
	user: selectUserData
});

const mapDispatchToProps = (dispatch) => ({
	startFetchProfile: (email) => dispatch(startFetchProfile({ email }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
