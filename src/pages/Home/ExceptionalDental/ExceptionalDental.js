import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/treatment.png';

const ExceptionalDental = () => {
    return (
        <Container>
            <Grid container spacing={1} sx={{ my: 20 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <img style={{ width: '450px' }} src={img} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>
                        <Typography variant="h5" component="div" sx={{ my: 3, fontWeight: 400 }}>
                            Exceptional Dental <br />
                            Care, On Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, color: 'gray', fontsize: 13, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus error quo similique, distinctio id porro sint, excepturi harum libero praesentium nobis inventore alias recusandae ea quas quaerat voluptatibus, reprehenderit obcaecati culpa repellat deleniti veniam saepe? Nulla veritatis ab quaerat perspiciatis voluptatibus, exercitationem, esse et soluta alias recusandae non nemo.
                        </Typography>
                        <Button style={{ backgroundColor: '#00FFFF' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExceptionalDental;