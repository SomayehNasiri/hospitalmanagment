
import { useState ,React} from 'react'
import Grid from './Grid';
//import LoginContext from '../LoginContext'

export default function DisplayPatientHistory(props){
    const [resultPatientHistory,setResultPatientHistory] = useState([]);

const getDoctorName=(result)=>{
let doctorresult=[]

result.forEach(element => {

     var myHeaders = new Headers();
   // myHeaders.append("Authorization", props.authToken);  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };    
    fetch('http://localhost:3001/doctor/id?id='+element.doctor_id,requestOptions)
        .then(res=> res.json())

        .then(res=>{
         console.log(element,result)
            console.log(res)
            element['doctorname']=res[0].name

            element['doctorlastname']=res[0].lastname
            console.log(element)
            setResultPatientHistory(resultPatientHistory.concat(element))
        })   
});


}

function handleDisplayPatientHistory(){
    
    var myHeaders = new Headers();
   // myHeaders.append("Authorization", props.authToken);
        
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    let doctorresult=[]
    fetch('http://localhost:3001/patient_history',requestOptions)
        .then(res=> res.json())
       // .then(res=> JSON.parse(res))
        .then(res=>(getDoctorName(res)))

 }
    return (<div>

        <br/>
        <button onClick={handleDisplayPatientHistory}>Get PatientHistorys</button>
        {/* <Grid  res={resultPatientHistory} actionType={"PatientHistoryList"}></Grid> */}

        <h2>{JSON.stringify(resultPatientHistory)}</h2>

    <table>
{resultPatientHistory.map(data=> (<tr><td>{data.id}</td>
                                    <td>{data.desease_id}</td>
                                    <td>{data.doctor_id}</td></tr>))}

    </table>
    </div>)
}