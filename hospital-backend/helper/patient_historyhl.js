
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var queryHelper= require('./generichelper')
var queries=require('./queries.js')

router.get('/', function (req, res) {
    return (queryHelper.fetchData(queries.patient_history_selectall, result => res.json(result)))

});
router.get('/id', function (req, res) {
let patient_history_id= req.query.id
    return (queryHelper.fetchData(queries.patient_history_selectById + patient_history_id, result => res.json(result)))

});

router.put('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
    data.push( body.patient_id)
    data.push( body.doctor_id)
    data.push(body.desease_id)
    data.push(body.treatment_id)
    data.push(body.checkin_date)
    data.push(body.checkout_date)

    //(id, patient_id, doctor_id, desease_id, treatment_id, checkin_date, checkout_date
    let id=body.id

        return (queryHelper.update_record( queries.patient_history_update ,[body,id], result => res.json(result)))
    
    });

router.post('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
    data.push( body.patient_id)
    data.push( body.doctor_id)
    data.push(body.desease_id)
    data.push(body.treatment_id)
    data.push(body.checkin_date)
    data.push(body.checkout_date)
    

    console.log(queries.patient_history_insert)
   return queryHelper.add_record(queries.patient_history_insert, [data],result => res.json(result))    ;

});


router.delete('/', function (req, res) {
let patient_history_id= req.query.id
console.log(patient_history_id)
    return (queryHelper.delete_record(queries.patient_history_delete + patient_history_id, result => res.json(result)))

});



//export this router to use in our index.js
module.exports = router;