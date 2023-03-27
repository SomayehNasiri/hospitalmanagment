var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var queryHelper= require('./generichelper')
var queries=require('./queries.js')

router.get('/', function (req, res) {
    return (queryHelper.fetchData(queries.desease_selectall, result => res.json(result)))

});
router.get('/id', function (req, res) {
let desease_id= req.query.id
    return (queryHelper.fetchData(queries.desease_selectById + desease_id, result => res.json(result)))

});

router.put('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
   
    data.push(body.name)
   
    data.push( body.description)

    // id, name, description, treatment_id
    let id=body.id

        return (queryHelper.update_record( queries.desease_update ,[body,id], result => res.json(result)))
    
    });

router.post('/', function (req, res) {
    let data=[];
    let body=req.body
    data.push(body.id)
    
    data.push(body.name)
    
    data.push( body.description)
    console.log(queries.desease_insert)
   return queryHelper.add_record(queries.desease_insert, [data],result => res.json(result))    ;

});


router.delete('/', function (req, res) {
let desease_id= req.query.id
console.log(desease_id)
    return (queryHelper.delete_record(queries.desease_delete + desease_id, result => res.json(result)))

});



//export this router to use in our index.js
module.exports = router;