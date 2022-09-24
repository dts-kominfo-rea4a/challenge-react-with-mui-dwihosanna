// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img src={data.photo} alt={data.name}/>
                    </Avatar>

                </ListItemAvatar>
                <ListItemText primary={data.name} secondary={
                <>
                    <Box>{data.phone}</Box>        
                    <Box>{data.email}</Box>        
                </>
            } />
            
            </ListItem>
        </>
    );
};

export default Contact;
