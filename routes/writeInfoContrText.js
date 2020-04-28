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
    Title:'InfoContrTextWrite',
    Heading:'InfoContrText',
    CoId:{label :'CoId'},
    Text01:{label :'Text01'},
    Text02:{label :'Text02'},
    Text03:{label :'Text03'},
    Text04:{label :'Text04'},
    Text05:{label :'Text05'},
    Text06:{label :'Text06'},
    Text07:{label :'Text07'},
    Text08:{label :'Text08'},
    Text09:{label :'Text09'},
    Text10:{label :'Text10'},
    Text11:{label :'Text11'},
    Text12:{label :'Text12'},
    Text13:{label :'Text13'},
    Text14:{label :'Text14'},
    Text15:{label :'Text15'},
    Text16:{label :'Text16'},
    Text17:{label :'Text17'},
    Text18:{label :'Text18'},
    Text19:{label :'Text19'},
    Text20:{label :'Text20'},
    Text21:{label :'Text21'},
    Text22:{label :'Text22'},
    Text23:{label :'Text23'},
    Text24:{label :'Text24'},
    Text25:{label :'Text25'},
    Text26:{label :'Text26'},
    Text27:{label :'Text27'},
    Text28:{label :'Text28'},
    Text29:{label :'Text29'},
    Text30:{label :'Text30'},
    RecVersion:{label :'RecVersion'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',
    }
    dao.readInfoContrText(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('InfoContrTextWritePage',parameter);
        console.log(parameter);        
    });
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,        
    }
    dao.writeInfoContrText(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('InfoContrTextWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
