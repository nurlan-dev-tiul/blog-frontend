import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

export const Subscriptions = ({followers, following, selectedValueClose}) => {

    const navigate = useNavigate()

    const handleCloseModal = (id) => {
        selectedValueClose();
        navigate(`/profile/${id}`)

    }

    return (
        <List sx={{ width: '500px', maxWidth: 360, bgcolor: '#fff' }}>
            {followers && followers.map(follower => (
                <ListItem 
                    key={follower?._id}
                    sx={{cursor: 'pointer'}}
                    onClick={() => handleCloseModal(follower?._id)}
                >
                    <ListItemAvatar>
                        <Avatar src={follower?.profilePhoto} />
                    </ListItemAvatar>
                    <ListItemText primary={follower?.firstName} secondary={follower?.email} />
                </ListItem>
            ))}
            {following && following.map(follow => (
                <ListItem 
                    key={follow?._id}
                    sx={{cursor: 'pointer'}}
                    onClick={() => handleCloseModal(follow?._id)}
                >
                    <ListItemAvatar>
                        <Avatar src={follow?.profilePhoto} />
                    </ListItemAvatar>
                    <ListItemText primary={follow?.firstName} secondary={follow?.email} />
                </ListItem>
            ))}
            
        </List>
    )
}
