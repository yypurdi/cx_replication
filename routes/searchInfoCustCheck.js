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
    Title:'InfoCustCheckSearch',
    Heading:'InfoCustCheck',
    CustomerId:{label :'CustomerId'},
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
    InfoCustCheck:{Heading:'InfoCustCheck',
        CustomerId:{header:'CustomerId'},
        Check01:{header:'Check01'},
        Check02:{header:'Check02'},
        Check03:{header:'Check03'},
        Check04:{header:'Check04'},
        Check05:{header:'Check05'},
        Check06:{header:'Check06'},
        Check07:{header:'Check07'},
        Check08:{header:'Check08'},
        Check09:{header:'Check09'},
        Check10:{header:'Check10'},
        Check11:{header:'Check11'},
        Check12:{header:'Check12'},
        Check13:{header:'Check13'},
        Check14:{header:'Check14'},
        Check15:{header:'Check15'},
        Check16:{header:'Check16'},
        Check17:{header:'Check17'},
        Check18:{header:'Check18'},
        Check19:{header:'Check19'},
        Check20:{header:'Check20'},
        RecVersion:{header:'RecVersion'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchInfoCustCheck?'+req._parsedUrl.query;
    dao.searchInfoCustCheck(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('InfoCustCheckSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
