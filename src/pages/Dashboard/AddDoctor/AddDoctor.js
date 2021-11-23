import { TextField } from '@mui/material';
import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <h2>Add doctor here</h2>
            <form>
                <TextField
                    label="Name"
                    variant="standard"
                />
            </form>
        </div>
    );
};

export default AddDoctor;