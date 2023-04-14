import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { apiEndPoint } from '../../enviroment';
import { AuthContext } from '../../context/AuthContext';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

function PaymentHistroy() {

    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const { user } = useContext(AuthContext);

    let rows = []

    data?.map((val, index) => rows.push(
        { id: val._id, col1: index + 1, col2: val.amount, col3: val.userId, col4: val.email, col5: val.status, col6: moment(val.createdAt).format('MMMM Do YYYY, h:mm:ss a') },
    ))

    const columns = [
        { field: "col1", headerName: "S.No.", width: 150 },
        { field: "col2", headerName: "Amount", width: 150 },
        { field: "col3", headerName: "UserId", width: 300 },
        { field: "col4", headerName: "Email", width: 200 },
        { field: "col5", headerName: "Status", width: 200 },
        { field: "col6", headerName: "Date & Time", width: 250 },
    ];

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
                            <Box sx={{ height: 372, width: 1 }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        ...data.initialState,
                                        pagination: { paginationModel: { pageSize: 5 } },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                />
                            </Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default PaymentHistroy