import { Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    Oleksandr Klepinin © {new Date().getFullYear()}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;