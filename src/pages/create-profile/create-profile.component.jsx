import React from 'react';
import './create-profile.styles.scss';
import CreateProfileCard from '../../components/create-profile-card/create-profile-card.component';
import ShareCvCard from '../../components/share-cv-card/share-cv-card.component';


class CreateProfile extends React.Component {
    state ={

    }

    render(){
        return (
        <div className="createprofile">
            <h1 className="createprofile__text">Profile</h1>
            <div className="createprofile__container">
                <div className="createprofile__insert--container">
                    <CreateProfileCard />
                </div>

                <div>
                    <div className="createprofile__sharecvcard--container">
                        <ShareCvCard/>
                    </div>
                    <div className="createprofile__btn--container">
                         <button className="createprofile__btn">Save & Close</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CreateProfile;