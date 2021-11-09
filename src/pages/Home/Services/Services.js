import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import floride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim, porro mollitia dicta corporis adipisci',
        img: floride
    },
    {
        name: 'Cavity Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim, porro mollitia dicta corporis adipisci',
        img: Cavity
    },
    {
        name: 'Whitening Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim, porro mollitia dicta corporis adipisci',
        img: Whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 5 }} variant="h6" component="div" color="success.main">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" color="text.info">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;