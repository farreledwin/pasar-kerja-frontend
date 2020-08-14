import React from 'react';
import './profile-page.styles.scss';
import ProfileCard from '../../components/profile-card/profile-card.component';
import ShareCvCard from '../../components/share-cv-card/share-cv-card.component';


class ProfilePage extends React.Component {
    state ={

    }
    render(){
        return (
        <div className="profilepage">
            <div className="profilepage__container">
                <div className="profilepage__profilecard--container">
                <h1 className="profilepage__text">Profile</h1>
                    <ProfileCard />
                </div>

                <div className="profilepage__sharecard-container">
                    <div>
                        <ShareCvCard />
                    </div>
                    <button className="profilepage__btn">Ubah</button>
                </div>
            </div>
        </div>
        );
    }
}

export default ProfilePage;