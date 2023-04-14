import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { apiEndPoint } from '../../enviroment';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Rating from "@mui/material/Rating";
import { useLocation } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(false);
    const [desc, setDesc] = React.useState("");
    const { user } = useContext(AuthContext)
    const [activeStar, setActiveStar] = React.useState(2.5);

    const currurl = useLocation()
    const astroId = currurl.pathname.split('/')[2]

    const handleClickOpen = () => {
        setOpen(true);
    };
    const formSubmit = () => {
        setOpen(false);

        let data = JSON.stringify({
            "userId": user.id,
            "astroId": astroId,
            "rating": activeStar,
            "description": desc
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}feedbackform/add`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        setOpen(props.feedbackFormOpen)
    }, [props])


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Feedback Form
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div style={{ width: "500px" }}>
                            <Box mb={5}>
                                <Typography component="p" mb={1}>
                                    Rating
                                </Typography>
                                <Rating
                                    name="half-rating"
                                    onChange={(e) => setActiveStar(e.target.value)}
                                    defaultValue={2.5}
                                    precision={0.5}
                                    sx={{ fontSize: 100 }}
                                />
                            </Box>
                            <Typography component="p" mb={1}>
                                Description
                            </Typography>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={5}
                                placeholder="Description"
                                onChange={(event) => setDesc(event.target.value)}
                            />
                        </div>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={formSubmit}>
                        Save changes
                    </Button>

                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}