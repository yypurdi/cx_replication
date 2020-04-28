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
 * /searchAppMessage:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppMessage
 *     summary: AppMessageSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: username
 *         description: String
 *         in: query
 *         type: String
 *       - name: jid
 *         description: String
 *         in: query
 *         type: String
 *       - name: msgtime
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: msgtype
 *         description: String
 *         in: query
 *         type: String
 *       - name: msgsubject
 *         description: String
 *         in: query
 *         type: String
 *       - name: msgtext
 *         description: String
 *         in: query
 *         type: String
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
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchAppMessage(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appMessage = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
