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
    Title:'InfoContrCheckNew',
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
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{coId:'',
        check01:'',
        check02:'',
        check03:'',
        check04:'',
        check05:'',
        check06:'',
        check07:'',
        check08:'',
        check09:'',
        check10:'',
        check11:'',
        check12:'',
        check13:'',
        check14:'',
        check15:'',
        check16:'',
        check17:'',
        check18:'',
        check19:'',
        check20:'',
        recVersion:'',
        }
    }
    res.render('InfoContrCheckNewPage',parameter);
    console.log(parameter);
});
router.post('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.body;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }    
    dao.newInfoContrCheck(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('InfoContrCheckNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
