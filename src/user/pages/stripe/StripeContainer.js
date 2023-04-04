import React, { useState, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { AuthContext } from '../../../context/AuthContext';
import { useLocation } from 'react-router-dom';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51LpoOQSCkptFWpk2iil33qKYErMqalPIsgO1XqufOfChTLUw5k962m5v0TTW6NapL17IrlpTTP8qMuH6w2JCkVGr00Q1KjrplA");

const successMessage = () => {
    return (
        <div className="success-msg">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            <div className="title">Payment Successful</div>
            <div className='my-4'>
            <a href='/' className='btn-primary color-white broder-radius-10 p-2'>Go To Home Page</a>
            </div>
        </div>
    )
}

function StripeContainer() {
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const { user } = useContext(AuthContext);

    const location = useLocation()
    const amount = location.pathname.split('/')[2]

    return (
        <div className="container box-center">
            <div className="row s-box">
                {paymentCompleted ? successMessage() : <React.Fragment>
                    <div className="col-md-12 order-md-1">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm amount={amount} setPaymentCompleted={setPaymentCompleted} id={user.id} username={user.firstname} />
                        </Elements>
                    </div>
                </React.Fragment>}
            </div>
        </div>
    );
}

export default StripeContainer;
