var express = require('Express');
var app = express();
var cors=require('cors')
//var auth=require('./auth.js')
//var user=require('./user.js')


const port = 3001
app.use(cors())
//Post request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var doctorshl = require('./helper/doctorshl.js');
//var deptHelper=require('./helper_dept');

app.use('/doctor', doctorshl);
 

var patientshl = require('./helper/patientshl.js');
app.use('/patient', patientshl);

var deseaseshl = require('./helper/deseasehl.js');
app.use('/desease', deseaseshl);


var patient_historyhl = require('./helper/patient_historyhl.js');
app.use('/patient_history', patient_historyhl);

var treatmenthl = require('./helper/treatmenthl.js');
app.use('/treatment', treatmenthl);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})