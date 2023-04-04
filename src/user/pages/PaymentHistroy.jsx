import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../enviroment';
import { AuthContext } from '../../context/AuthContext';
import moment from 'moment';

function PaymentHistroy() {

    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const { user } = useContext(AuthContext);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}payhistory/${user.id}`,
        };

        axios.request(config)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [])

    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => {
                                        const { amount, userId, email, status, createdAt } = value;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{amount}</td>
                                                <td>{userId}</td>
                                                <td>{email}</td>
                                                <td className='text-success text-bold text-capitalize'>{status}</td>
                                                <td>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentHistroy