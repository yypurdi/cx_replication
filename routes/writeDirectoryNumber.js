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
    Title:'DirectoryNumberWrite',
    Heading:'DirectoryNumber',
    DnId:{label :'DnId'},
    Plcode:{label :'Plcode'},
    Ndc:{label :'Ndc'},
    Hlcode:{label :'Hlcode'},
    DnNum:{label :'DnNum'},
    DnStatus:{label :'DnStatus'},
    DnStatusModDate:{label :'DnStatusModDate'},
    DealerId:{label :'DealerId'},
    DnAssignDate:{label :'DnAssignDate'},
    DnPhoneFlag:{label :'DnPhoneFlag'},
    DnType:{label :'DnType'},
    DnStatusRequ:{label :'DnStatusRequ'},
    DnStaRequDate:{label :'DnStaRequDate'},
    DnAssign:{label :'DnAssign'},
    DnEntdate:{label :'DnEntdate'},
    DnModdate:{label :'DnModdate'},
    DnModflag:{label :'DnModflag'},
    DnAuth:{label :'DnAuth'},
    Evcode:{label :'Evcode'},
    Hmcode:{label :'Hmcode'},
    LocalPrefixLen:{label :'LocalPrefixLen'},
    SimpohId:{label :'SimpohId'},
    SimpotId:{label :'SimpotId'},
    SimpotBatch:{label :'SimpotBatch'},
    ExternalInd:{label :'ExternalInd'},
    BlockInd:{label :'BlockInd'},
    ExtensionLengthMax:{label :'ExtensionLengthMax'},
    DnAuthPending:{label :'DnAuthPending'},
    RecVersion:{label :'RecVersion'},
    DirnumNpcode:{label :'DirnumNpcode'},
    VpnId:{label :'VpnId'},
    StaticPdpRequired:{label :'StaticPdpRequired'},
    RoamingAllowed:{label :'RoamingAllowed'},
    TransactionId:{label :'TransactionId'},
    BusinessUnitId:{label :'BusinessUnitId'},
    ReservedForPortingInd:{label :'ReservedForPortingInd'},
    PortedNumberInd:{label :'PortedNumberInd'},
    Rscode:{label :'Rscode'},
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
    dao.readDirectoryNumber(jsonObj,function(err,rows) {
        parameter.record = rows[0];
        res.render('DirectoryNumberWritePage',parameter);
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
    dao.writeDirectoryNumber(jsonObj,function(err,rows) {    
        if(err==null){
            parameter.statusCode = 200;
            parameter.statusMessage = 'Successfully created';
        }else{
            parameter.statusCode = err.code;
            parameter.statusMessage = err.message;
        }
        parameter.record = jsonObj;
        res.render('DirectoryNumberWritePage',parameter);
        console.log(parameter);        
    });
});

module.exports = router;
