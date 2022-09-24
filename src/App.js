
import { Box, createTheme, Grid, List, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header'
import Contact from './components/Contact'
import contactsJSON from './data/contacts.json';
import { Container } from '@mui/system';
import { useState } from 'react';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
// Uncomment untuk memuat daftar kontak
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);
  
  const addContact = (data) => {
    setContacts([...contacts, data])
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header>

        </Header>
      </Box>
        <Grid container spacing={3} marginLeft={4}>
          <Grid item xs={4} md={6}>
            {/* xs=untuk jatah grid sesuai ukuran screen small, md= medium, lg=largem, maks=12*/}
            <ContactForm onSubmit={(data) => addContact(data)}>

            </ContactForm>
          </Grid>
          <Grid item xs={12} md={4}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {
                contacts.map((item, index) => (
                  <Contact data={item} key={index} />
                ))
              }
            </List>
          </Grid>
        </Grid>
      
    </ThemeProvider>
  );
};

export default App;
