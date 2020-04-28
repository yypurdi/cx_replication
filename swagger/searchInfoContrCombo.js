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
 * /searchInfoContrCombo:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchInfoContrCombo
 *     summary: InfoContrComboSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: coId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: combo01
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo02
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo03
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo04
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo05
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo06
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo07
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo08
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo09
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo10
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo11
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo12
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo13
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo14
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo15
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo16
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo17
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo18
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo19
 *         description: String
 *         in: query
 *         type: String
 *       - name: combo20
 *         description: String
 *         in: query
 *         type: String
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
    dao.searchInfoContrCombo(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.infoContrCombo = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
