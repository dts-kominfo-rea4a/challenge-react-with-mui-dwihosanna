// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const ContactForm = ({
    onSubmit,
}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

    const addContactHandler = () => {
        const data = {
            name,
            phone,
            email,
            photo,
        }
        onSubmit(data)
    }
    return (
        <Box>
            <Box marginBottom={4}>
                <TextField 
                    label="name"
                    onChange={(event) => setName(event.target.value)}
                />
            </Box>
            <Box marginBottom={4}>
                <TextField 
                    label="phone"
                    onChange={(event) => setPhone(event.target.value)}
                />
            </Box>
            <Box marginBottom={4}>
                <TextField 
                    label="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Box>
            <Box marginBottom={4}>
                <TextField 
                    label="photo"
                    onChange={(event) => setPhoto(event.target.value)}
                />
            </Box>
            <Box>
                <Button onClick={addContactHandler} variant="contained">tes</Button>
            </Box>
        </Box>
    );
}

export default ContactForm;