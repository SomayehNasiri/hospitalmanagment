var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var queryHelper= require('./generichelper')
var queries=require('./queries.js')

router.get('/', function (req, res) {
    return (queryHelper.fetchData(queries.doctors_selectall, result => res.json(result)))

});
router.get('/id', function (req, res) {
let doctor_id= req.query.id
    return (queryHelper.fetchData(queries.doctors_selectById + doctor_id, result => res.json(result)))

});

router.put('/', function (req, res) {
    let data=[];
    let body=req.body
   
    data.push(body.name)
    data.push(body.lastname)
    data.push( body.age)
    data.push( body.gender)
    data.push( body.birth_date)
    data.push( body.address)
    data.push( body.city)
    data.push( body.country)
    data.push( body.phone_no)
    data.push( body.description)
    data.push(body.id)

    let id=body.id

        return (queryHelper.update_record( queries.doctors_update ,[body,id], result => res.json(result)))
    
    });

router.post('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
    data.push(body.name)
    data.push(body.lastname)
    data.push( body.age)
    data.push( body.gender)
    data.push( body.birth_date)
    data.push( body.address)
    data.push( body.city)
    data.push( body.country)
    data.push( body.phone_no)
    data.push( body.description)

   return queryHelper.add_record(queries.doctors_insert, [data],result => res.json(result))    ;

});


router.delete('/', function (req, res) {
let doctor_id= req.query.id
console.log(doctor_id)
    return (queryHelper.delete_record(queries.doctors_delete + doctor_id, result => res.json(result)))

});



//export this router to use in our index.js
module.exports = router;