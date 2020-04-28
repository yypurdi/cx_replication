/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');    
var database = require('./dao');
var dao = new database.Dao();    
var sessionChecker = require('./security');
var appresource = {
    Title:'InfoContrCheckRead',
    Heading:'InfoContrCheck',
    CoId:{label :'CoId'},
    Check01:{label :'Check01'},
    Check02:{label :'Check02'},
    Check03:{label :'Check03'},
    Check04:{label :'Check04'},
    Check05:{label :'Check05'},
    Check06:{label :'Check06'},
    Check07:{label :'Check07'},
    Check08:{label :'Check08'},
    Check09:{label :'Check09'},
    Check10:{label :'Check10'},
    Check11:{label :'Check11'},
    Check12:{label :'Check12'},
    Check13:{label :'Check13'},
    Check14:{label :'Check14'},
    Check15:{label :'Check15'},
    Check16:{label :'Check16'},
    Check17:{label :'Check17'},
    Check18:{label :'Check18'},
    Check19:{label :'Check19'},
    Check20:{label :'Check20'},
    RecVersion:{label :'RecVersion'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readInfoContrCheck?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readInfoContrCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readInfoContrCheck(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchInfoContrCheck');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('InfoContrCheckReadPage',parameter);
    }    
    Promise.all([readInfoContrCheck]).then(sendResult);
});

module.exports = router;
