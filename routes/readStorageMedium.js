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
    Title:'StorageMediumRead',
    Heading:'StorageMedium',
    SmId:{label :'SmId'},
    Plcode:{label :'Plcode'},
    SmcId:{label :'SmcId'},
    SmSerialnum:{label :'SmSerialnum'},
    SmStatus:{label :'SmStatus'},
    SmStatusModDate:{label :'SmStatusModDate'},
    DealerId:{label :'DealerId'},
    SmDeliveryId:{label :'SmDeliveryId'},
    SmDeliveryDate:{label :'SmDeliveryDate'},
    SimpohId:{label :'SimpohId'},
    SimpotId:{label :'SimpotId'},
    SimpotBatch:{label :'SimpotBatch'},
    SmPin:{label :'SmPin'},
    SmPuk:{label :'SmPuk'},
    SmAccControl:{label :'SmAccControl'},
    SmCodeAdm:{label :'SmCodeAdm'},
    SpIdE:{label :'SpIdE'},
    SpIdG:{label :'SpIdG'},
    SmStatusRequ:{label :'SmStatusRequ'},
    SmStaRequDate:{label :'SmStaRequDate'},
    SmEntdate:{label :'SmEntdate'},
    SmModdate:{label :'SmModdate'},
    SmUserlastmod:{label :'SmUserlastmod'},
    SmPin2:{label :'SmPin2'},
    SmPuk2:{label :'SmPuk2'},
    SmAuth:{label :'SmAuth'},
    PiId:{label :'PiId'},
    ExternalInd:{label :'ExternalInd'},
    Vendcode:{label :'Vendcode'},
    SmAdm1:{label :'SmAdm1'},
    SmAdm2:{label :'SmAdm2'},
    SmAdm3:{label :'SmAdm3'},
    SmAdm4:{label :'SmAdm4'},
    SmCodeRetailer:{label :'SmCodeRetailer'},
    SmCodeA:{label :'SmCodeA'},
    SmCodeB:{label :'SmCodeB'},
    SmAuthPending:{label :'SmAuthPending'},
    RecVersion:{label :'RecVersion'},
    SmOrigEsnId:{label :'SmOrigEsnId'},
    PrepaidProfileId:{label :'PrepaidProfileId'},
    RaProcessId:{label :'RaProcessId'},
    TransactionId:{label :'TransactionId'},
    BusinessUnitId:{label :'BusinessUnitId'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readStorageMedium?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readStorageMedium = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readStorageMedium(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchStorageMedium');
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
        res.render('StorageMediumReadPage',parameter);
    }    
    Promise.all([readStorageMedium]).then(sendResult);
});

module.exports = router;
