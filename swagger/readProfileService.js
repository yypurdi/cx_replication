/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var database = require('./dao');
var dao = new database.Dao();
        
/**
 * @swagger
 * /readProfileService:
 *   get:
 *     tags:
 *       - Administration
 *     description: readProfileService
 *     summary: ProfileServiceRead
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: profileId
 *         description: Integer 
 *         in: query
 *         type: Integer
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found 
 *       '500':
 *         description: Internal Server Problem
 */    

router.get('/', function(req, res, next) {
    
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    
    var readProfileService = new Promise((resolve, reject) => {
        dao.readProfileService(jsonObj,function(err,rows) {
            if(err) res.status(err.code).end();
            else{
                if(rows[0]===undefined) res.status(404).end();
                else{ 
                    jsonObj = rows[0];
                    resolve(jsonObj);
                }
            }
        });
    });
    
    var prServSpcodeHist = new Promise((resolve, reject) => {
        dao.searchPrServSpcodeHist(jsonObj,function(err,rows) {
            jsonObj.prServSpcodeHist = rows;
            resolve(jsonObj);
        });        
    });
    
    var prServStatusHist = new Promise((resolve, reject) => {
        dao.searchPrServStatusHist(jsonObj,function(err,rows) {
            jsonObj.prServStatusHist = rows;
            resolve(jsonObj);
        });        
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        res.status(200).send(jsonObj);
    }
    
    Promise.all([readProfileService,prServSpcodeHist,prServStatusHist]).then(sendResult);
});

module.exports = router;
