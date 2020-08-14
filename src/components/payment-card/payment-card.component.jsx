import React from 'react';
import './payment-card.styles.scss';
import LogoBca from '../../assets/after-paymentcard/bca-logo.png';


const PaymentCard = ({data}) => {

        return (
            <div className="paymentcard">
                <div className="paymentcard__type">
                    <img className="paymentcard__type-logo" src={LogoBca}></img>
                    <h3 className="paymentcard__type-text">BCA Virtual Account</h3>
                </div>

                <div className="paymentcard__detail">
                    <div className="paymentcard__number">
                        <h5 className="paymentcard__number--text">Nomer virtual account</h5>
                        <h6 className="paymentcard__number--virtualacc">0020202020022</h6>
                    </div>

                    <a className="paymentcard__number--copylink" href="">Salin</a>
                </div>

                <div className="paymentcard__detail">
                    <div className="paymentcard__payment">
                        <h5 className="paymentcard__payment--text">Total Pembayaran</h5>
                        <h6 className="paymentcard__payment--total">Rp.{data.total_price}  </h6>
                    </div>

                    <a className="paymentcard__payment--detaillink" href="">Detail</a>
                </div>
            </div>
        );
    }

export default PaymentCard;