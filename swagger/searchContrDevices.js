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
 * /searchContrDevices:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchContrDevices
 *     summary: ContrDevicesSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: cdId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cdSeqno
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: coId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: portId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: eqId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cdStatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: cdActivDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cdDeactivDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cdValidfrom
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cdEntdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cdModdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cdUserlastmod
 *         description: String
 *         in: query
 *         type: String
 *       - name: cdSmNum
 *         description: String
 *         in: query
 *         type: String
 *       - name: cdChannels
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cdChannelsExcl
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cdEqNum
 *         description: String
 *         in: query
 *         type: String
 *       - name: cdPendingState
 *         description: String
 *         in: query
 *         type: String
 *       - name: cdRsId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cdPlcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: hlcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: recVersion
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
    dao.searchContrDevices(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.contrDevices = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
