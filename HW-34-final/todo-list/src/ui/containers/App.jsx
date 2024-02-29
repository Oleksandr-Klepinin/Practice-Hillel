import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import InfoPage from '../pages/InfoPage.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '98vh' }}>
            <Header />
            <Container component="main" sx={{ flex: 1, py: 3 }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/info" element={<InfoPage />} />
                </Routes>
            </Container>
            <Footer sx={{ py: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }} />
        </Box>
    );
}

export default App;