import React, { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext'
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Account() {
    const { wallet } = useContext(WalletContext);
    return (
        <Card sx={{ maxWidth: 1345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Account Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <table className="table table-hover table-responsive">
                            <thead className='text-right'>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Closing Bal.</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Particular</th>
                                    <th scope="col">Date & Time</th>
                                    <th scope="col">SubTotal</th>
                                </tr>
                            </thead>
                            <tbody className='text-right'>
                                {
                                    wallet?.wallet?.map((value, index) => {
                                        const { amount, action, subTotal, walletUpdated_at, particular } = value;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{subTotal}</td>
                                                <td>{action === true ? '+' : '-'}</td>
                                                <td>{amount}</td>
                                                <td className='text-success text-bold text-capitalize'>{particular}</td>
                                                <td>{moment(walletUpdated_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                <td>{` ${action === true ? '+' : '-'}${amount}`}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className='text-right text-bold h5'>Toal Balance = {wallet.total}</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}