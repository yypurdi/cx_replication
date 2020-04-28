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
 * /searchAppUsers:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchAppUsers
 *     summary: AppUsersSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: username
 *         description: String
 *         in: query
 *         type: String
 *       - name: password
 *         description: String
 *         in: query
 *         type: String
 *       - name: name
 *         description: String
 *         in: query
 *         type: String
 *       - name: email
 *         description: String
 *         in: query
 *         type: String
 *       - name: phone
 *         description: String
 *         in: query
 *         type: String
 *       - name: mobile
 *         description: String
 *         in: query
 *         type: String
 *       - name: enabled
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: keycode
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
    dao.searchAppUsers(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.appUsers = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
