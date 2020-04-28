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
    Title:'PortNew',
    Heading:'Port',
    PortId:{label :'PortId'},
    Plcode:{label :'Plcode'},
    Hlcode:{label :'Hlcode'},
    PortNum:{label :'PortNum'},
    PortStatus:{label :'PortStatus'},
    PortStatusmoddat:{label :'PortStatusmoddat'},
    PortKi:{label :'PortKi'},
    PortKind:{label :'PortKind'},
    PortChannels:{label :'PortChannels'},
    PortChannelsExcl:{label :'PortChannelsExcl'},
    SmId:{label :'SmId'},
    PortSmRequ:{label :'PortSmRequ'},
    SimpohId:{label :'SimpohId'},
    SimpotId:{label :'SimpotId'},
    SimpotBatch:{label :'SimpotBatch'},
    DnId:{label :'DnId'},
    DealerId:{label :'DealerId'},
    PortAssignDate:{label :'PortAssignDate'},
    PortTkey:{label :'PortTkey'},
    PortStatusRequ:{label :'PortStatusRequ'},
    PortStaRequDate:{label :'PortStaRequDate'},
    PortActivDate:{label :'PortActivDate'},
    PortDeactivDate:{label :'PortDeactivDate'},
    PortEntdate:{label :'PortEntdate'},
    PortModdate:{label :'PortModdate'},
    PortUserlastmod:{label :'PortUserlastmod'},
    PreActivated:{label :'PreActivated'},
    SmsUpdate:{label :'SmsUpdate'},
    PortRicBatch:{label :'PortRicBatch'},
    ExternalInd:{label :'ExternalInd'},
    Capacity:{label :'Capacity'},
    AvailableCapacity:{label :'AvailableCapacity'},
    PrmValueId:{label :'PrmValueId'},
    RecVersion:{label :'RecVersion'},
    PortNpcode:{label :'PortNpcode'},
    TransactionId:{label :'TransactionId'},
    BusinessUnitId:{label :'BusinessUnitId'},
    }

router.get('/', sessionChecker, function(req, res, next) {
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
        statusCode:100,
        statusMessage:'',        
        record:{portId:'',
        plcode:'',
        hlcode:'',
        portNum:'',
        portStatus:'',
        portStatusmoddat:'',
        portKi:'',
        portKind:'',
        portChannels:'',
        portChannelsExcl:'',
        smId:'',
        portSmRequ:'',
        simpohId:'',
        simpotId:'',
        simpotBatch:'',
        dnId:'',
        dealerId:'',
        portAssignDate:'',
        portTkey:'',
        portStatusRequ:'',
        portStaRequDate:'',
        portActivDate:'',
        portDeactivDate:'',
        portEntdate:'',
        portModdate:'',
        portUserlastmod:'',
        preActivated:'',
        smsUpdate:'',
        portRicBatch:'',
        externalInd:'',
        capacity:'',
        availableCapacity:'',
        prmValueId:'',
        recVersion:'',
        portNpcode:'',
        transactionId:'',
        businessUnitId:'',
        }
    }
    res.render('PortNewPage',parameter);
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
    dao.newPort(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('PortNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
