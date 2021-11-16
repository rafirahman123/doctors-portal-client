import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw755FmLkCLE9p3Ur6jFQpqH24jXc9LqVBSLw0r4fBgPHvu5kp6ZDjYHUibRP7lUUDidnOJglr5f7vzNBb1Iqgj006MRIpf2L')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appintments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);
    return (
        <div>
            <h2>Pleasae Pay for:{appointment.patientName} for: {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1.install stripe and stripe-react
2.set publishable key
3.Elements
4.Checkout Form
---------
5. Create payment method
6.server create payment intent api
7.load client secret in client side
8.confirm card payment
9.handle user errors
*/