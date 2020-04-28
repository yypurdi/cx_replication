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
    Title:'PrServSpcodeHistRead',
    Heading:'PrServSpcodeHist',
    ProfileId:{label :'ProfileId'},
    CoId:{label :'CoId'},
    Sncode:{label :'Sncode'},
    Histno:{label :'Histno'},
    Spcode:{label :'Spcode'},
    Transactionno:{label :'Transactionno'},
    ValidFromDate:{label :'ValidFromDate'},
    EntryDate:{label :'EntryDate'},
    RequestId:{label :'RequestId'},
    RecVersion:{label :'RecVersion'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readPrServSpcodeHist?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readPrServSpcodeHist = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readPrServSpcodeHist(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchPrServSpcodeHist');
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
        res.render('PrServSpcodeHistReadPage',parameter);
    }    
    Promise.all([readPrServSpcodeHist]).then(sendResult);
});

module.exports = router;
