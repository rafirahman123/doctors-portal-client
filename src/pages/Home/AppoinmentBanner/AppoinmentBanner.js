import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button } from '@mui/material';

const appoinmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, height: 500, marginTop: '-100px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'

                }}>
                    <Box>
                        <Typography variant="h6" sx={{ my: 2 }} component="div" color={{ color: '#00FFFF' }} >
                            Appoinment
                        </Typography>
                        <Typography variant="h2" component="div" color={{ color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography component="div" sx={{ my: 3 }} color={{ color: 'white', fontsize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, tenetur?
                        </Typography>
                        <Button style={{ backgroundColor: '#00FFFF' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;