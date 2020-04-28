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
    Title:'ContrDevicesNew',
    Heading:'ContrDevices',
    CdId:{label :'CdId'},
    CdSeqno:{label :'CdSeqno'},
    CoId:{label :'CoId'},
    PortId:{label :'PortId'},
    DnId:{label :'DnId'},
    EqId:{label :'EqId'},
    CdStatus:{label :'CdStatus'},
    CdActivDate:{label :'CdActivDate'},
    CdDeactivDate:{label :'CdDeactivDate'},
    CdValidfrom:{label :'CdValidfrom'},
    CdEntdate:{label :'CdEntdate'},
    CdModdate:{label :'CdModdate'},
    CdUserlastmod:{label :'CdUserlastmod'},
    CdSmNum:{label :'CdSmNum'},
    CdChannels:{label :'CdChannels'},
    CdChannelsExcl:{label :'CdChannelsExcl'},
    CdEqNum:{label :'CdEqNum'},
    CdPendingState:{label :'CdPendingState'},
    CdRsId:{label :'CdRsId'},
    CdPlcode:{label :'CdPlcode'},
    Hlcode:{label :'Hlcode'},
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
        record:{cdId:'',
        cdSeqno:'',
        coId:'',
        portId:'',
        dnId:'',
        eqId:'',
        cdStatus:'',
        cdActivDate:'',
        cdDeactivDate:'',
        cdValidfrom:'',
        cdEntdate:'',
        cdModdate:'',
        cdUserlastmod:'',
        cdSmNum:'',
        cdChannels:'',
        cdChannelsExcl:'',
        cdEqNum:'',
        cdPendingState:'',
        cdRsId:'',
        cdPlcode:'',
        hlcode:'',
        recVersion:'',
        }
    }
    res.render('ContrDevicesNewPage',parameter);
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
    dao.newContrDevices(jsonObj,function(err,rows) {
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('ContrDevicesNewPage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
