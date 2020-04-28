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
 * /searchCcontactAll:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchCcontactAll
 *     summary: CcontactAllSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: customerId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ccseq
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cctitle
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ccname
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccfname
 *         description: String
 *         in: query
 *         type: String
 *       - name: cclname
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccstreet
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccstreetno
 *         description: String
 *         in: query
 *         type: String
 *       - name: cclnamemc
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccaddr1
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccaddr2
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccaddr3
 *         description: String
 *         in: query
 *         type: String
 *       - name: cccity
 *         description: String
 *         in: query
 *         type: String
 *       - name: cczip
 *         description: String
 *         in: query
 *         type: String
 *       - name: cctn
 *         description: String
 *         in: query
 *         type: String
 *       - name: cctn2
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccfax
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline1
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline2
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline3
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline4
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline5
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccline6
 *         description: String
 *         in: query
 *         type: String
 *       - name: cctnArea
 *         description: String
 *         in: query
 *         type: String
 *       - name: cctn2Area
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccfaxArea
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccjobdesc
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccdeftrk
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccuser
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccbill
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccbilldetails
 *         description: String
 *         in: query
 *         type: String
 *       - name: cccontract
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccship
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccmagazine
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccdirectory
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccforward
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccurgent
 *         description: String
 *         in: query
 *         type: String
 *       - name: country
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cclanguage
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ccadditional
 *         description: String
 *         in: query
 *         type: String
 *       - name: sortCriteria
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccentdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ccmoddate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ccmod
 *         description: String
 *         in: query
 *         type: String
 *       - name: cccounty
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccstate
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccvaliddate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ccbillPrevious
 *         description: String
 *         in: query
 *         type: String
 *       - name: welcomeCrit
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ccmname
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccemail
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccaddryears
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ccsmsno
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccbilltemp
 *         description: String
 *         in: query
 *         type: String
 *       - name: userlastmod
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccvalidation
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccuserInst
 *         description: String
 *         in: query
 *         type: String
 *       - name: cclocation1
 *         description: String
 *         in: query
 *         type: String
 *       - name: cclocation2
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccremark
 *         description: String
 *         in: query
 *         type: String
 *       - name: recVersion
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: maritalStatus
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: csnationality
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: cssocialsecno
 *         description: String
 *         in: query
 *         type: String
 *       - name: csdrivelicence
 *         description: String
 *         in: query
 *         type: String
 *       - name: csemployer
 *         description: String
 *         in: query
 *         type: String
 *       - name: employee
 *         description: String
 *         in: query
 *         type: String
 *       - name: companyType
 *         description: String
 *         in: query
 *         type: String
 *       - name: idType
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: passportno
 *         description: String
 *         in: query
 *         type: String
 *       - name: birthdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: cscompregno
 *         description: String
 *         in: query
 *         type: String
 *       - name: cscomptaxno
 *         description: String
 *         in: query
 *         type: String
 *       - name: cscusttype
 *         description: String
 *         in: query
 *         type: String
 *       - name: ccsex
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
    dao.searchCcontactAll(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.ccontactAll = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
