import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Better
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ py: 4 }}>
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
}
