// export default function CreateDoctor(props) {


import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

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
    description: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // send form data to server or perform other actions
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const textFieldStyle = { width: '10%', minWidth: '100px' }; // added custom style for text fields


  return (
       
    <form onSubmit={handleSubmit}>
    <div sx={{ display: 'flex', flexDirection: 'column', width: '10%', alignItems: 'flex-start' }}>
      <TextField name="id" label="ID" variant="outlined" value={formData.id} onChange={handleChange} />
       <br />
      <br />
      <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange}  />
      <br />
      <br />
      <TextField name="lastname" label="Last Name" variant="outlined" value={formData.lastname} onChange={handleChange}  />
      <br />
      <br />
      <TextField name="age" label="Age" variant="outlined" value={formData.age} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="gender" label="Gender" variant="outlined" value={formData.gender} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="birth_date" label="Birth Date" variant="outlined" value={formData.birth_date} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="address" label="Address" variant="outlined" value={formData.address} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="city" label="City" variant="outlined" value={formData.city} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="country" label="Country" variant="outlined" value={formData.country} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="phone_no" label="Phone Number" variant="outlined" value={formData.phone_no} onChange={handleChange} style={textFieldStyle} />
      <br />
      <br />
      <TextField name="description" label="Description" variant="outlined" value={formData.description} onChange={handleChange} multiline style={textFieldStyle} />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
      </div>
    </form>
   
  );
}


