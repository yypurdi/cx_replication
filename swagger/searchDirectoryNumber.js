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
 * /searchDirectoryNumber:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchDirectoryNumber
 *     summary: DirectoryNumberSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: dnId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: plcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ndc
 *         description: String
 *         in: query
 *         type: String
 *       - name: hlcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnNum
 *         description: String
 *         in: query
 *         type: String
 *       - name: dnStatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: dnStatusModDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: dealerId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnAssignDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: dnPhoneFlag
 *         description: String
 *         in: query
 *         type: String
 *       - name: dnType
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnStatusRequ
 *         description: String
 *         in: query
 *         type: String
 *       - name: dnStaRequDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: dnAssign
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnEntdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: dnModdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: dnModflag
 *         description: String
 *         in: query
 *         type: String
 *       - name: dnAuth
 *         description: String
 *         in: query
 *         type: String
 *       - name: evcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: hmcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: localPrefixLen
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
 *       - name: externalInd
 *         description: String
 *         in: query
 *         type: String
 *       - name: blockInd
 *         description: String
 *         in: query
 *         type: String
 *       - name: extensionLengthMax
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dnAuthPending
 *         description: String
 *         in: query
 *         type: String
 *       - name: recVersion
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: dirnumNpcode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: vpnId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: staticPdpRequired
 *         description: String
 *         in: query
 *         type: String
 *       - name: roamingAllowed
 *         description: String
 *         in: query
 *         type: String
 *       - name: transactionId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: businessUnitId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: reservedForPortingInd
 *         description: String
 *         in: query
 *         type: String
 *       - name: portedNumberInd
 *         description: String
 *         in: query
 *         type: String
 *       - name: rscode
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
    dao.searchDirectoryNumber(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.directoryNumber = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
