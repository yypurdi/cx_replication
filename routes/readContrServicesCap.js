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
    Title:'ContrServicesCapRead',
    Heading:'ContrServicesCap',
    CoId:{label :'CoId'},
    Sncode:{label :'Sncode'},
    Seqno:{label :'Seqno'},
    SeqnoPre:{label :'SeqnoPre'},
    Bccode:{label :'Bccode'},
    PendingBccode:{label :'PendingBccode'},
    DnId:{label :'DnId'},
    DnBlockId:{label :'DnBlockId'},
    MainDirnum:{label :'MainDirnum'},
    CsStatus:{label :'CsStatus'},
    CsActivDate:{label :'CsActivDate'},
    CsDeactivDate:{label :'CsDeactivDate'},
    CsRequest:{label :'CsRequest'},
    RecVersion:{label :'RecVersion'},
    PublicNumberDnId:{label :'PublicNumberDnId'},
    VpnId:{label :'VpnId'},
    PublicBlockId:{label :'PublicBlockId'},
    ProfileId:{label :'ProfileId'},
    DnShownInBill:{label :'DnShownInBill'},
    RequestId:{label :'RequestId'},
    DirectoryNumber:{Heading:'DirectoryNumber',
        DnId:{header:'DnId'},
        Plcode:{header:'Plcode'},
        Ndc:{header:'Ndc'},
        Hlcode:{header:'Hlcode'},
        DnNum:{header:'DnNum'},
        DnStatus:{header:'DnStatus'},
        DnStatusModDate:{header:'DnStatusModDate'},
        DealerId:{header:'DealerId'},
        DnAssignDate:{header:'DnAssignDate'},
        DnPhoneFlag:{header:'DnPhoneFlag'},
        DnType:{header:'DnType'},
        DnStatusRequ:{header:'DnStatusRequ'},
        DnStaRequDate:{header:'DnStaRequDate'},
        DnAssign:{header:'DnAssign'},
        DnEntdate:{header:'DnEntdate'},
        DnModdate:{header:'DnModdate'},
        DnModflag:{header:'DnModflag'},
        DnAuth:{header:'DnAuth'},
        Evcode:{header:'Evcode'},
        Hmcode:{header:'Hmcode'},
        LocalPrefixLen:{header:'LocalPrefixLen'},
        SimpohId:{header:'SimpohId'},
        SimpotId:{header:'SimpotId'},
        SimpotBatch:{header:'SimpotBatch'},
        ExternalInd:{header:'ExternalInd'},
        BlockInd:{header:'BlockInd'},
        ExtensionLengthMax:{header:'ExtensionLengthMax'},
        DnAuthPending:{header:'DnAuthPending'},
        RecVersion:{header:'RecVersion'},
        DirnumNpcode:{header:'DirnumNpcode'},
        VpnId:{header:'VpnId'},
        StaticPdpRequired:{header:'StaticPdpRequired'},
        RoamingAllowed:{header:'RoamingAllowed'},
        TransactionId:{header:'TransactionId'},
        BusinessUnitId:{header:'BusinessUnitId'},
        ReservedForPortingInd:{header:'ReservedForPortingInd'},
        PortedNumberInd:{header:'PortedNumberInd'},
        Rscode:{header:'Rscode'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readContrServicesCap?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readContrServicesCap = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readContrServicesCap(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchContrServicesCap');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var directoryNumber = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchDirectoryNumber(jsonObj,function(err,rows) {
                jsonObj.directoryNumber = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('ContrServicesCapReadPage',parameter);
    }    
    Promise.all([readContrServicesCap,directoryNumber]).then(sendResult);
});

module.exports = router;
