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
 * /searchPort:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchPort
 *     summary: PortSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: portId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: plcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: hlcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portNum
 *         description: String
 *         in: query
 *         type: String
 *       - name: portStatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: portStatusmoddat
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portKi
 *         description: String
 *         in: query
 *         type: String
 *       - name: portKind
 *         description: String
 *         in: query
 *         type: String
 *       - name: portChannels
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portChannelsExcl
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: smId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portSmRequ
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: simpohId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: simpotId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: simpotBatch
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dealerId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portAssignDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portTkey
 *         description: String
 *         in: query
 *         type: String
 *       - name: portStatusRequ
 *         description: String
 *         in: query
 *         type: String
 *       - name: portStaRequDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portActivDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portDeactivDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portEntdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portModdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: portUserlastmod
 *         description: String
 *         in: query
 *         type: String
 *       - name: preActivated
 *         description: String
 *         in: query
 *         type: String
 *       - name: smsUpdate
 *         description: String
 *         in: query
 *         type: String
 *       - name: portRicBatch
 *         description: String
 *         in: query
 *         type: String
 *       - name: externalInd
 *         description: String
 *         in: query
 *         type: String
 *       - name: capacity
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: availableCapacity
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: prmValueId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: recVersion
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portNpcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: transactionId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: businessUnitId
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
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchPort(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.port = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
