import React from 'react'
import { Link } from 'react-router-dom'

export default function PaymentCancle() {
    return (
        <>
            <div className='text-center my-5'>
                <h2 className='fw-bold my-3'>Payment Cancel</h2>
                <p>
                    We appreciate your business!
                    If you have any questions, please email
                    <a href="mailto:naveenmojo123@gmail.com"> naveenmojo123@gmail.com </a>.
                </p>
                <button className='p-3 mt-4 btn-primary'>
                    <Link to='/' className='text-white fw-bold'>Go To Home Page</Link>
                </button>
            </div>
        </>
    )
}
