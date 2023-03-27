
import { useState ,React} from 'react'
import Grid from './Grid';
//import LoginContext from '../LoginContext'

export default function ListDoctor(props){
    const [resultDoctor,setResultDoctor] = useState({});
  //const [data1,setData1]=useState({});
//const data=React.useContext(LoginContext)
function handleDocList(){
    
    var myHeaders = new Headers();
   // myHeaders.append("Authorization", props.authToken);
        
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch('http://localhost:3001/doctor',requestOptions)
        .then(res=> res.json())
        .then(res=>setResultDoctor(res))
    //    .then(res=>setData1(res)) 
}
    return (<div>

        <br/>
        <button onClick={handleDocList}>Get Doctors</button>
        <Grid  res={resultDoctor} actionType={"DoctorList"}></Grid>

        {/* <h2>{JSON.stringify(resultDoctor)}</h2> */}
    </div>)
}