import React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { apiEndPoint } from '../../enviroment';
import axios from 'axios';

function Notification(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [count, setcount] = React.useState(0)
    const [user, setUser] = React.useState([])
    const open = Boolean(anchorEl);

    console.log(props)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setcount(0)
    };

    const status = props.status;
    const arrivalMessage = props.arrivalMessage

    function notificationCount() {
        if (status === 0 && arrivalMessage !== null) {
            setcount(count + 1)
        } else {
            setcount(0)
        }
    }

    const getUser = async () => {
        try {
            const res = await axios(`${apiEndPoint}auth/user?userId=` + arrivalMessage.sender);
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        notificationCount()
        getUser();
    }, [arrivalMessage, status])

    return (
        <>
            <Stack id="basic-menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} spacing={4} direction="row" sx={{ color: 'action.active', margin: "8px 25px 0px 10px" }}>
                <Badge color="secondary" badgeContent={count}>
                    <NotificationsNoneIcon />
                </Badge>
            </Stack>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    user.length !== 0  ? <MenuItem className="p-2 m-2" onClick={handleClose}>
                        <ListItemIcon>
                            <ArrowCircleRightOutlinedIcon fontSize="small" />
                        </ListItemIcon>  Message From {user.firstname}
                    </MenuItem> :

                        <MenuItem className="p-2 m-2" onClick={handleClose}>
                            <ListItemIcon>
                                <ArrowCircleRightOutlinedIcon fontSize="small" />
                            </ListItemIcon>  No New Notification.
                        </MenuItem>
                }

            </Menu>
        </>
    )
}

export default Notification;