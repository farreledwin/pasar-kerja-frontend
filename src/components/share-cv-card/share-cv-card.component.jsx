import React from 'react';
import './share-cv-card.styles.scss';
import Cloud from '../../assets/after-sharecvcard/cloud.png';
import Copy from '../../assets/after-sharecvcard/copy.png';
import Email from '../../assets/after-sharecvcard/email.png';


class ShareCvCard extends React.Component {
    state ={

    }
    render(){
        return (
        <div className="sharecvcard">
                <h3 className="sharecvcard__title">Bagikan CV dari <span className="blue">PasarKerja</span></h3>
                <p className="sharecvcard__text">Bagikan CV anda. detail kontak anda akan di masukkan kedalam CV PasarKerja saat anda bagikan.</p>
                <div className="sharecvcard__link-container">
                    <div className="sharecvcard__link">
                        <img src ={Email} className="sharecvcard__link-img"></img>
                        <a className="sharecvcard__link-text" href="">Kirim via Email</a>
                    </div>
                <hr></hr>
                    <div className="sharecvcard__link">
                        <img src ={Copy} className="sharecvcard__link-img"></img>
                        <a className="sharecvcard__link-text" href="">Copy dan bagikan link</a>
                    </div>
                <hr></hr>
                    <div className="sharecvcard__link">
                        <img src ={Cloud} className="sharecvcard__link-img"></img>
                        <a className="sharecvcard__link-text" href="">Unduh PDF</a>
                    </div>
                </div>

        </div>
        );
    }
}

export default ShareCvCard;