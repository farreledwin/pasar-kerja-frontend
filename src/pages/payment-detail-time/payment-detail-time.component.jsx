import React from 'react';
import PaymentCard from '../../components/payment-card/payment-card.component';
import SimiliarJob from '../../components/similiar-job/similiar-job.component';
import './payment-detail-time.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectBookingData } from '../../redux/joblist/joblist.selectors';
import {connect} from 'react-redux';

const PaymentDetailTime = ({bookingData}) => {

        return (
            <div>
                <div className="paymentdetailtime">
                    <div className="paymentdetailtime__title">
                        <h1>Waktu Pembayaran</h1>
                        <h4>00.60.00</h4>
                    </div>

                    <div className="paymentdetailtime__paymentcard">
                        <PaymentCard data={bookingData} />
                    </div>
                    
                    <div className="paymentdetailtime__button-container">
                        <button className="paymentdetailtime__button--find">Cari Pekerja</button>
                        <button className="paymentdetailtime__button--check">Cek Status Pembayaran</button>
                    </div>

                    <div className="paymentdetailtime__footer">
                        <h5>Cara Pembayaran</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus.Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                
                <hr></hr>

                <div>
                    <SimiliarJob />
                </div>
            </div>
        );
    }

const mapStateToProps = createStructuredSelector({
    bookingData: selectBookingData
});

export default connect(mapStateToProps,null)(PaymentDetailTime);