import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';


    export default function CreateDesease() {


  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    treatmentId: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/desease',{

    method: 'POST',
      headers: {
        'Accept': 'application/json',

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to submit data.');
        }
        alert('Data submitted successfully!');
      })
      .catch((error) => {
        console.log(error.message);
        alert('Failed to submit data.');
      });    

};

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1">My Page</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField name="id" label="ID" fullWidth value={formData.id} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="name" label="Name" fullWidth value={formData.name} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="description" label="Description" multiline fullWidth value={formData.description} onChange={handleInputChange} />
        </Grid>
  
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};
