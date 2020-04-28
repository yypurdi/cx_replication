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
 * /searchAppPersistentLogins:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppPersistentLogins
 *     summary: AppPersistentLoginsSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: username
 *         description: String
 *         in: query
 *         type: String
 *       - name: series
 *         description: String
 *         in: query
 *         type: String
 *       - name: token
 *         description: String
 *         in: query
 *         type: String
 *       - name: lastUsed
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
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
    dao.searchAppPersistentLogins(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appPersistentLogins = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
