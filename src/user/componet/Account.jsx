import React, { useContext } from 'react'
import { WalletContext } from '../../context/WalletContext'
import moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

export default function Account() {
    const { wallet } = useContext(WalletContext);

    let data = []

    wallet?.wallet?.map((val, index) => data.push(
        { id: val._id, col1:index + 1, col2: val.subTotal, col3: val.action === true ? '+' : '-', col4: val.amount, col5: val.particular, col6: moment(val.walletUpdated_at).format('MMMM Do YYYY, h:mm:ss a'), col7: `${val.action === true ? '+' : '-'}${val.amount}` },
    ))

    const columns = [
        { field: "col1", headerName: "S.No.", width: 150 },
        { field: "col2", headerName: "Closing Bal.", width: 150 },
        { field: "col3", headerName: "Action", width: 150 },
        { field: "col4", headerName: "Amount", width: 160 },
        { field: "col5", headerName: "Particular", width: 200 },
        { field: "col6", headerName: "Date & Time", width: 300 },
        { field: "col7", headerName: "SubTotal", width: 150 }
    ];

    return (
        <>
            <Card sx={{ maxWidth: 1345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Account Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Box sx={{ height: 372, width: 1 }}>
                                <DataGrid
                                    rows={data}
                                    columns={columns}
                                    initialState={{
                                        ...data.initialState,
                                        pagination: { paginationModel: { pageSize: 5 } },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                />
                            </Box>
                            <div className='text-right text-bold h5 mr-5 pr-5 mt-4'>Toal Balance = {wallet.total}</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    );
}