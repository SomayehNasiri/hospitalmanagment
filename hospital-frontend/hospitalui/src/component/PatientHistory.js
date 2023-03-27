
import React from 'react';
import { TextField, MenuItem, Grid ,Button} from '@mui/material';
import {useState,useEffect} from 'react'



export default function PatientHistory() {

const [refData,setRefData]=useState({
    patients:[],
    doctors:[],
    desease:[],
    treatments:[]

})

const [patientData,setPatientData]=useState([])
const [doctorData,setDoctorData]=useState([])
const [deseaseData,setDeseaseData]=useState([])
const [treatmentData,settreatmentData]=useState([])




useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", props.authToken);
         
     var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     };
     
     fetch('http://localhost:3001/doctor',requestOptions)
         .then(res=> res.json())
         .then(res=>{
            
          {setDoctorData(res)} 
        
         fetch('http://localhost:3001/patient',requestOptions)
         .then(res2=> res2.json())
         .then(res2=>{setPatientData(res2)})

        })

        fetch('http://localhost:3001/treatment',requestOptions)
         .then(res2=> res2.json())
         .then(res2=>{settreatmentData(res2)})

         fetch('http://localhost:3001/desease',requestOptions)
         .then(res3=> res3.json())
         .then(res3=>{setDeseaseData(res3)})
    
    
  return () => {
    
  }
}, [])

const handleSubmit = () => {


    fetch('http://localhost:3001/patient_history',{

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

const [formData, setFormData] = useState({
    id: null, 
    patient_id: null, 
    doctor_id: null, 
    desease_id: null, 
    treatment_id: null, 
    checkin_date: null, 
    checkout_date: null

  });

  const handleFormChange = (event) => {
    console.log(event.target)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

// const handlePatientData=(e)=>{
//     console.log(e.target.value)
// }

//function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField 
            onChange={handleFormChange}
            name="id"
        id="id" label="ID" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="patient_id"
          select
          label="Patient"
          name="patient_id"
          fullWidth
          onChange={handleFormChange}
        //   id, , doctor_id, desease_id, treatment_id, , checkout_date
        >
          {patientData.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="doctor_id"
          select
          label="Doctor"
          name="doctor_id"
          fullWidth
          onChange={handleFormChange}

        >
          {doctorData.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="disease_id"
          name="desease_id"
          select
          label="Disease"
          fullWidth
          onChange={handleFormChange}

        >
          {deseaseData.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="treatment_id"
          select
          label="Treatment"
          fullWidth
          onChange={handleFormChange}
            name="treatment_id"
        >
          {treatmentData.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.description}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="checkin_date"
          label="Check-in Date"
          type="date"
          name="checkin_date"

          onChange={handleFormChange}

          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="checkout_date"
          label="Check-in Date"
          name="checkout_date"
          type="date"
          onChange={handleFormChange}

          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <br />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
      </Grid>

      
  );
};

//}