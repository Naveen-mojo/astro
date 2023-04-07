import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../enviroment';
import { AuthContext } from '../../context/AuthContext';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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
            <Card sx={{ maxWidth: 1345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Payemnt Histroy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default PaymentHistroy