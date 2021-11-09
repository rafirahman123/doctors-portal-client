import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';



const Testimonial = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{ color: '#15d2c7', fontWeight: 600, mt: 5 }}>
                Testimonial
            </Typography>
            <br />
            <Typography variant="h4">
                Whats our patients says?
            </Typography>

            <Grid container spacing={1} sx={{ my: 20 }}>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography sx={{ fontSize: 15, fontWeight: 400, p: 2 }} variant="h6" gutterBottom component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem eligendi fugit ipsum, assumenda cupiditate deserunt, porro delectus facilis pariatur quisquam animi dignissimos est modi voluptate quibusdam nesciunt quaerat officiis.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', my: 2, ml: 10 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <img style={{ width: '50px' }} src={people1} alt="" />
                            </Typography>
                            <Typography variant="h15" gutterBottom component="div" sx={{ color: '#15d2c7', ml: 2 }}>
                                Winson harry <br />
                                california
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography sx={{ fontSize: 15, fontWeight: 400, p: 2 }} variant="h6" gutterBottom component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem eligendi fugit ipsum, assumenda cupiditate deserunt, porro delectus facilis pariatur quisquam animi dignissimos est modi voluptate quibusdam nesciunt quaerat officiis.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', my: 2, ml: 10 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <img style={{ width: '50px' }} src={people2} alt="" />
                            </Typography>
                            <Typography variant="h15" gutterBottom component="div" sx={{ color: '#15d2c7', ml: 2 }}>
                                Winson harry <br />
                                california
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography sx={{ fontSize: 15, fontWeight: 400, p: 2 }} variant="h6" gutterBottom component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem eligendi fugit ipsum, assumenda cupiditate deserunt, porro delectus facilis pariatur quisquam animi dignissimos est modi voluptate quibusdam nesciunt quaerat officiis.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', my: 2, ml: 10 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <img style={{ width: '50px' }} src={people3} alt="" />
                            </Typography>
                            <Typography variant="h15" gutterBottom component="div" sx={{ color: '#15d2c7', ml: 2 }}>
                                Winson harry <br />
                                california
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Testimonial;