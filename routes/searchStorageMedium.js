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
    Title:'StorageMediumSearch',
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
    StorageMedium:{Heading:'StorageMedium',
        SmId:{header:'SmId'},
        Plcode:{header:'Plcode'},
        SmcId:{header:'SmcId'},
        SmSerialnum:{header:'SmSerialnum'},
        SmStatus:{header:'SmStatus'},
        SmStatusModDate:{header:'SmStatusModDate'},
        DealerId:{header:'DealerId'},
        SmDeliveryId:{header:'SmDeliveryId'},
        SmDeliveryDate:{header:'SmDeliveryDate'},
        SimpohId:{header:'SimpohId'},
        SimpotId:{header:'SimpotId'},
        SimpotBatch:{header:'SimpotBatch'},
        SmPin:{header:'SmPin'},
        SmPuk:{header:'SmPuk'},
        SmAccControl:{header:'SmAccControl'},
        SmCodeAdm:{header:'SmCodeAdm'},
        SpIdE:{header:'SpIdE'},
        SpIdG:{header:'SpIdG'},
        SmStatusRequ:{header:'SmStatusRequ'},
        SmStaRequDate:{header:'SmStaRequDate'},
        SmEntdate:{header:'SmEntdate'},
        SmModdate:{header:'SmModdate'},
        SmUserlastmod:{header:'SmUserlastmod'},
        SmPin2:{header:'SmPin2'},
        SmPuk2:{header:'SmPuk2'},
        SmAuth:{header:'SmAuth'},
        PiId:{header:'PiId'},
        ExternalInd:{header:'ExternalInd'},
        Vendcode:{header:'Vendcode'},
        SmAdm1:{header:'SmAdm1'},
        SmAdm2:{header:'SmAdm2'},
        SmAdm3:{header:'SmAdm3'},
        SmAdm4:{header:'SmAdm4'},
        SmCodeRetailer:{header:'SmCodeRetailer'},
        SmCodeA:{header:'SmCodeA'},
        SmCodeB:{header:'SmCodeB'},
        SmAuthPending:{header:'SmAuthPending'},
        RecVersion:{header:'RecVersion'},
        SmOrigEsnId:{header:'SmOrigEsnId'},
        PrepaidProfileId:{header:'PrepaidProfileId'},
        RaProcessId:{header:'RaProcessId'},
        TransactionId:{header:'TransactionId'},
        BusinessUnitId:{header:'BusinessUnitId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchStorageMedium?'+req._parsedUrl.query;
    dao.searchStorageMedium(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('StorageMediumSearchPage',parameter);
        console.log(parameter);        
    })
});

module.exports = router;
