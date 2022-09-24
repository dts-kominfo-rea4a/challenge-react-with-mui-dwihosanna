// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Box, Container } from '@mui/system';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Container maxWidth="sm" sx={{textAlign: "center", marginBottom: 2}}>
      <Box>Call a Friend</Box>
      <Box>Your friendly contact app</Box>
    </Container>
  );
};

export default Header;
