
import { useState, React } from 'react'
//import Grid from '../Grid';
//import LoginContext from '../LoginContext'


export default function DeleteDoctor(props) {
    const [resultDoctor, setResultDoctor] = useState([]);
    const [resultDelete, setResultDelete] = useState({});

    const [idToDelete, setIdToDelete] = useState("")
    //const [data1,setData1]=useState({});

    //const data=React.useContext(LoginContext)

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
    function handleDelete() {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch('http://localhost:3001/doctor?id=' + idToDelete, requestOptions)
            .then(res => res.json())
            .then(res => setResultDelete(res))
        //    .then(res=>setData1(res))  

    }
    const captureValue = (e) => setIdToDelete(e.target.value)

    return (<div>

        <br /> <select onChange={captureValue}>
            {resultDoctor.map(data => (<option value={data.id}> {data.id} _ {data.name}</option>))}
        </select>
        <button onClick={handleDocList}>Get Doctors</button>
        <button onClick={handleDelete}>Delete Doctor</button>

    </div>)
}