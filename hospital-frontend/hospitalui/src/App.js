import logo from './logo.svg';
import './App.css';
import CreateDoctor from './component/CreateDoctor';
import ListDoctor from './component/ListDoctor';
import DeleteDoctor from './component/DeleteDoctor';
import UpdateDoctor from './component/UpdateDoctor';
import CreatePatient from './component/CreatePatient';
import { Route, Routes, Link } from 'react-router-dom'
import CreateDesease from './component/CreateDesease';
import PatientHistory from './component/PatientHistory'
import DisplayPatientHistory from './component/DisplayPatientHistory';


function App() {
  return (
    <div>   
    {/* <Link to="/"> home**  </Link> */}
    <br /><Link to="/list"> Doctor List </Link><br />
    <Link to="/adddoctor"> Add Doctor  </Link><br />
    <Link to="/updatedoctor"> Update Doctor  </Link><br />
    <Link to="/deletedoctor"> Delete Doctor  </Link><br />
    <Link to="/addpatient"> Add Patient  </Link><br />
    <Link to="/adddesease"> Add Desease  </Link><br />
    <Link to="/patienthistory"> Patient History  </Link><br />
    <Link to="/displaypatienthistory"> Display Patient History  </Link>

    <Routes>
      {/* <Route path="/" exact element={<Home />} ></Route> */}
      <Route path="/list" element={<ListDoctor />} ></Route>
      <Route path="/adddoctor" element={< CreateDoctor/>} ></Route>
      <Route path="/updatedoctor" element={<UpdateDoctor />} ></Route>
      <Route path="/deletedoctor" element={<DeleteDoctor />} ></Route>
      <Route path="/addpatient" element={< CreatePatient/>} ></Route>
      <Route path="/adddesease" element={< CreateDesease/>} ></Route>
      <Route path="/patienthistory" element={< PatientHistory/>} ></Route>
      <Route path="/displaypatienthistory" element={< DisplayPatientHistory/>} ></Route>




      </Routes>
</div>


  );
}

export default App;
