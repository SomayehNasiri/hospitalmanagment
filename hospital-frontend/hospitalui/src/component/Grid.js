import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { TextField, Button, Grid, Typography } from '@mui/material';




const columns_dept = [
  { field: 'id', headerName: 'Department Id', width: 150 },
  { field: 'dept_name', headerName: 'Department Name', width: 150 },
];

const columns_doctor = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'lastname', headerName: 'Last Name', width: 150 },

  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'address', headerName: 'Adress', width: 150 },
];

export default function Grid(props) {
  
    if (props.actionType==="StudentList"){
      return (
      <div style={{ height: 300, width: '100%' }}>
     <DataGrid rows={props.res_st} columns={columns_doctor} />
    </div>
      )
    }else  if (props.actionType==="DoctorList"){
      return (
    <div style={{ height: 300, width: '100%' }}>
     <DataGrid rows={props.res} columns={columns_doctor} />
    </div>
      )
    }
    else {
      return(<div>here</div>)
  }
  
}

