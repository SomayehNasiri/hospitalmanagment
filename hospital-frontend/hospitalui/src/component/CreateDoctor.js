// export default function CreateDoctor(props) {


import React, { useState } from 'react';
import { TextField, Button ,Box,MenuItem} from '@mui/material';

export default function CreateDoctor() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lastname: '',
        age: '',
        gender: '',
        birth_date: '',
        address: '',
        city: '',
        country: '',
        phone_no: '',
        description: '',
      });
    
      const handleFormChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = () => {


          fetch('http://localhost:3001/doctor',{

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
        <Box m={2} p={2}>
          <TextField
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
        select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleFormChange}
        variant="outlined"
        defaultValue="Other"
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="female" >None</MenuItem>

      </TextField>
          <br />
          <br />
          <TextField
            label="Birth Date"
      type="date"

            name="birth_date"
            value={formData.birth_date}
            onChange={handleFormChange}
            variant="outlined"
            InputLabelProps={{
                shrink: true
              }}
          />


          <br />
          <br />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Phone Number"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      );
    }
    