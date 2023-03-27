// export default function CreateDoctor(props) {


import React, { useState } from 'react';
import { TextField, Button ,Box,MenuItem} from '@mui/material';

export default function UpdateDoctor() {

    const [resultDoctor, setResultDoctor] = useState([]);

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

      const captureValue = (event) => {
     let id =event.target.value
        for (let i=0;i<resultDoctor.length;i++){
            setFormData(resultDoctor[i]);
        }

      };
    
      const handleSubmit = () => {


          fetch('http://localhost:3001/doctor',{

        method: 'PUT',
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
    
      function handleDocList() {

        var myHeaders = new Headers();
        // myHeaders.append("Authorization", props.authToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch('http://localhost:3001/doctor', requestOptions)
            .then(res => res.json())
            .then(res => setResultDoctor(res))
        //    .then(res=>setData1(res))  
    }


      return (
        <Box m={2} p={2}>
 <br /> <select onChange={captureValue}>
            {resultDoctor.map(data => (<option value={data.id}> {data.id} _ {data.name}</option>))}
        </select>
        <button onClick={handleDocList}>Get Doctors</button>

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
    