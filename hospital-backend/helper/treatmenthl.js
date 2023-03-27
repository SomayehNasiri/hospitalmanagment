var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var queryHelper= require('./generichelper')
var queries=require('./queries.js')

router.get('/', function (req, res) {
    return (queryHelper.fetchData(queries.treatment_selectall, result => res.json(result)))

});
router.get('/id', function (req, res) {
let treatment_id= req.query.id
    return (queryHelper.fetchData(queries.treatment_selectById + treatment_id, result => res.json(result)))

});

router.put('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
   
    data.push(body.description)
   
    data.push( body.medicine_id)
    data.push( body.advice)

//id, description, medicine_id, advice

    let id=body.id

        return (queryHelper.update_record( queries.treatment_update ,[body,id], result => res.json(result)))
    
    });

router.post('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
   
    data.push(body.description)
   
    data.push( body.medicine_id)
    data.push( body.advice)
    console.log(queries.treatment_insert)
   return queryHelper.add_record(queries.treatment_insert, [data],result => res.json(result))    ;

});


router.delete('/', function (req, res) {
let treatment_id= req.query.id
console.log(treatment_id)
    return (queryHelper.delete_record(queries.treatment_delete + treatment_id, result => res.json(result)))

});



//export this router to use in our index.js
module.exports = router;