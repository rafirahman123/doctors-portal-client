import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" component="div">
                            Your new smile <br />
                            starts here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, color: 'gray', fontsize: 13, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id consequatur recusandae tempora atque impedit in ducimus, laborum quasi? Adipisci?
                        </Typography>
                        <Button style={{ backgroundColor: '#00FFFF' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;