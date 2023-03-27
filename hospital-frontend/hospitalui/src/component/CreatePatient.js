import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';


export default function CreatePatient() {

  
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastName: '',
    age: '',
    gender: '',
    birthDate: '',
    address: '',
    city: '',
    country: '',
    phoneNo: '',
    description: ''
  });
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch('http://localhost:3001/patient',{

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
      <Typography variant="h4" component="h1">Add Patient</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField name="id" label="ID" fullWidth value={formData.id} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="name" label="Name" fullWidth value={formData.name} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="lastName" label="Last Name" fullWidth value={formData.lastName} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="age" label="Age" type="number" fullWidth value={formData.age} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="gender" label="Gender" fullWidth value={formData.gender} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="birthDate" label="Birth Date" type="date" fullWidth value={formData.birthDate} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="address" label="Address" fullWidth value={formData.address} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="city" label="City" fullWidth value={formData.city} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="country" label="Country" fullWidth value={formData.country} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField name="phoneNo" label="Phone No" fullWidth value={formData.phoneNo} onChange={handleInputChange} />
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
  }