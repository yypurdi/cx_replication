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
    Title:'ContractAllRead',
    Heading:'ContractAll',
    CoId:{label :'CoId'},
    CustomerId:{label :'CustomerId'},
    Type:{label :'Type'},
    Plcode:{label :'Plcode'},
    Sccode:{label :'Sccode'},
    SubmId:{label :'SubmId'},
    CoSigned:{label :'CoSigned'},
    CoEquType:{label :'CoEquType'},
    CoRepBill:{label :'CoRepBill'},
    CoRep:{label :'CoRep'},
    CoRepBillIdno:{label :'CoRepBillIdno'},
    CoRepIdno:{label :'CoRepIdno'},
    CoInstalled:{label :'CoInstalled'},
    CoArchive:{label :'CoArchive'},
    CoDirEntry:{label :'CoDirEntry'},
    CoOperatorDir:{label :'CoOperatorDir'},
    CoPstnDir:{label :'CoPstnDir'},
    CoAssServ:{label :'CoAssServ'},
    CoAssEqu:{label :'CoAssEqu'},
    CoCrdCheck:{label :'CoCrdCheck'},
    CoCrdChkEnd:{label :'CoCrdChkEnd'},
    CoCrdChkStart:{label :'CoCrdChkStart'},
    CoCrdClicks:{label :'CoCrdClicks'},
    CoCrdClicksDay:{label :'CoCrdClicksDay'},
    CoCrdDays:{label :'CoCrdDays'},
    CoComment:{label :'CoComment'},
    CoReserved:{label :'CoReserved'},
    CoExpirDate:{label :'CoExpirDate'},
    CoActivated:{label :'CoActivated'},
    CoEntdate:{label :'CoEntdate'},
    CoModdate:{label :'CoModdate'},
    CoUserlastmod:{label :'CoUserlastmod'},
    Tmcode:{label :'Tmcode'},
    TmcodeDate:{label :'TmcodeDate'},
    CoCrdDTr1:{label :'CoCrdDTr1'},
    CoCrdDTr2:{label :'CoCrdDTr2'},
    CoCrdDTr3:{label :'CoCrdDTr3'},
    CoCrdPTr1:{label :'CoCrdPTr1'},
    CoCrdPTr2:{label :'CoCrdPTr2'},
    CoCrdPTr3:{label :'CoCrdPTr3'},
    EccodeLdc:{label :'EccodeLdc'},
    PendingEccodeLdc:{label :'PendingEccodeLdc'},
    EccodeLec:{label :'EccodeLec'},
    PendingEccodeLec:{label :'PendingEccodeLec'},
    CoRequest:{label :'CoRequest'},
    DealerId:{label :'DealerId'},
    NotValid:{label :'NotValid'},
    Arpcode:{label :'Arpcode'},
    CoAddrOnIbill:{label :'CoAddrOnIbill'},
    CoCrdAmount:{label :'CoCrdAmount'},
    CoCrdAmountDay:{label :'CoCrdAmountDay'},
    ProductHistoryDate:{label :'ProductHistoryDate'},
    CoConfirm:{label :'CoConfirm'},
    CoExtCsuin:{label :'CoExtCsuin'},
    TrialEndDate:{label :'TrialEndDate'},
    CoIbCdrFlag:{label :'CoIbCdrFlag'},
    Currency:{label :'Currency'},
    RecVersion:{label :'RecVersion'},
    AnPackageId:{label :'AnPackageId'},
    CoRelType:{label :'CoRelType'},
    PendingTmcode:{label :'PendingTmcode'},
    ContractTemplate:{label :'ContractTemplate'},
    CoCode:{label :'CoCode'},
    BusinessUnitId:{label :'BusinessUnitId'},
    Description:{label :'Description'},
    AgreementType:{label :'AgreementType'},
    ExtProductId:{label :'ExtProductId'},
    RemotePlcode:{label :'RemotePlcode'},
    Eccode:{label :'Eccode'},
    HplmnBidGroupId:{label :'HplmnBidGroupId'},
    VplmnBidGroupId:{label :'VplmnBidGroupId'},
    HomePartyId:{label :'HomePartyId'},
    ContractTypeId:{label :'ContractTypeId'},
    TrialStartDate:{label :'TrialStartDate'},
    FohAggregationFlag:{label :'FohAggregationFlag'},
    GlAccPackId:{label :'GlAccPackId'},
    CdsBillMedium:{label :'CdsBillMedium'},
    CdsGeneration:{label :'CdsGeneration'},
    ChargePartNum:{label :'ChargePartNum'},
    ChStatus:{label :'ChStatus'},
    SvpFile:{label :'SvpFile'},
    MakeCallsDate:{label :'MakeCallsDate'},
    CoInprepayPending:{label :'CoInprepayPending'},
    CoInprepay:{label :'CoInprepay'},
    ChargePerAdjRef:{label :'ChargePerAdjRef'},
    NextCutoffDate:{label :'NextCutoffDate'},
    LastCutoffDate:{label :'LastCutoffDate'},
    LastChargeDate:{label :'LastChargeDate'},
    LastNoticeDate:{label :'LastNoticeDate'},
    NotBillMedium:{label :'NotBillMedium'},
    ChargeStartDate:{label :'ChargeStartDate'},
    EarliestEndDate:{label :'EarliestEndDate'},
    CommonRefDataInd:{label :'CommonRefDataInd'},
    ContractLanguage:{label :'ContractLanguage'},
    PendingLanguage:{label :'PendingLanguage'},
    RrCandidate:{label :'RrCandidate'},
    ChStatusValidfrom:{label :'ChStatusValidfrom'},
    ContrDevices:{Heading:'ContrDevices',
        CdId:{header:'CdId'},
        CdSeqno:{header:'CdSeqno'},
        CoId:{header:'CoId'},
        PortId:{header:'PortId'},
        DnId:{header:'DnId'},
        EqId:{header:'EqId'},
        CdStatus:{header:'CdStatus'},
        CdActivDate:{header:'CdActivDate'},
        CdDeactivDate:{header:'CdDeactivDate'},
        CdValidfrom:{header:'CdValidfrom'},
        CdEntdate:{header:'CdEntdate'},
        CdModdate:{header:'CdModdate'},
        CdUserlastmod:{header:'CdUserlastmod'},
        CdSmNum:{header:'CdSmNum'},
        CdChannels:{header:'CdChannels'},
        CdChannelsExcl:{header:'CdChannelsExcl'},
        CdEqNum:{header:'CdEqNum'},
        CdPendingState:{header:'CdPendingState'},
        CdRsId:{header:'CdRsId'},
        CdPlcode:{header:'CdPlcode'},
        Hlcode:{header:'Hlcode'},
        RecVersion:{header:'RecVersion'},
        },
    ContrServicesCap:{Heading:'ContrServicesCap',
        CoId:{header:'CoId'},
        Sncode:{header:'Sncode'},
        Seqno:{header:'Seqno'},
        SeqnoPre:{header:'SeqnoPre'},
        Bccode:{header:'Bccode'},
        PendingBccode:{header:'PendingBccode'},
        DnId:{header:'DnId'},
        DnBlockId:{header:'DnBlockId'},
        MainDirnum:{header:'MainDirnum'},
        CsStatus:{header:'CsStatus'},
        CsActivDate:{header:'CsActivDate'},
        CsDeactivDate:{header:'CsDeactivDate'},
        CsRequest:{header:'CsRequest'},
        RecVersion:{header:'RecVersion'},
        PublicNumberDnId:{header:'PublicNumberDnId'},
        VpnId:{header:'VpnId'},
        PublicBlockId:{header:'PublicBlockId'},
        ProfileId:{header:'ProfileId'},
        DnShownInBill:{header:'DnShownInBill'},
        RequestId:{header:'RequestId'},
        },
    ContractHistory:{Heading:'ContractHistory',
        CoId:{header:'CoId'},
        ChSeqno:{header:'ChSeqno'},
        ChStatus:{header:'ChStatus'},
        ChReason:{header:'ChReason'},
        ChValidfrom:{header:'ChValidfrom'},
        ChPending:{header:'ChPending'},
        Entdate:{header:'Entdate'},
        Userlastmod:{header:'Userlastmod'},
        Request:{header:'Request'},
        RecVersion:{header:'RecVersion'},
        },
    InfoContrCheck:{Heading:'InfoContrCheck',
        CoId:{header:'CoId'},
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
    InfoContrCombo:{Heading:'InfoContrCombo',
        CoId:{header:'CoId'},
        Combo01:{header:'Combo01'},
        Combo02:{header:'Combo02'},
        Combo03:{header:'Combo03'},
        Combo04:{header:'Combo04'},
        Combo05:{header:'Combo05'},
        Combo06:{header:'Combo06'},
        Combo07:{header:'Combo07'},
        Combo08:{header:'Combo08'},
        Combo09:{header:'Combo09'},
        Combo10:{header:'Combo10'},
        Combo11:{header:'Combo11'},
        Combo12:{header:'Combo12'},
        Combo13:{header:'Combo13'},
        Combo14:{header:'Combo14'},
        Combo15:{header:'Combo15'},
        Combo16:{header:'Combo16'},
        Combo17:{header:'Combo17'},
        Combo18:{header:'Combo18'},
        Combo19:{header:'Combo19'},
        Combo20:{header:'Combo20'},
        RecVersion:{header:'RecVersion'},
        },
    InfoContrText:{Heading:'InfoContrText',
        CoId:{header:'CoId'},
        Text01:{header:'Text01'},
        Text02:{header:'Text02'},
        Text03:{header:'Text03'},
        Text04:{header:'Text04'},
        Text05:{header:'Text05'},
        Text06:{header:'Text06'},
        Text07:{header:'Text07'},
        Text08:{header:'Text08'},
        Text09:{header:'Text09'},
        Text10:{header:'Text10'},
        Text11:{header:'Text11'},
        Text12:{header:'Text12'},
        Text13:{header:'Text13'},
        Text14:{header:'Text14'},
        Text15:{header:'Text15'},
        Text16:{header:'Text16'},
        Text17:{header:'Text17'},
        Text18:{header:'Text18'},
        Text19:{header:'Text19'},
        Text20:{header:'Text20'},
        Text21:{header:'Text21'},
        Text22:{header:'Text22'},
        Text23:{header:'Text23'},
        Text24:{header:'Text24'},
        Text25:{header:'Text25'},
        Text26:{header:'Text26'},
        Text27:{header:'Text27'},
        Text28:{header:'Text28'},
        Text29:{header:'Text29'},
        Text30:{header:'Text30'},
        RecVersion:{header:'RecVersion'},
        },
    ProfileService:{Heading:'ProfileService',
        ProfileId:{header:'ProfileId'},
        CoId:{header:'CoId'},
        Sncode:{header:'Sncode'},
        SpcodeHistno:{header:'SpcodeHistno'},
        StatusHistno:{header:'StatusHistno'},
        EntryDate:{header:'EntryDate'},
        ChannelNum:{header:'ChannelNum'},
        OvwAccFirst:{header:'OvwAccFirst'},
        DateBilled:{header:'DateBilled'},
        SnClass:{header:'SnClass'},
        OvwSubscr:{header:'OvwSubscr'},
        Subscript:{header:'Subscript'},
        OvwAccess:{header:'OvwAccess'},
        OvwAccPrd:{header:'OvwAccPrd'},
        Accessfee:{header:'Accessfee'},
        ChannelExcl:{header:'ChannelExcl'},
        DisSubscr:{header:'DisSubscr'},
        InstallDate:{header:'InstallDate'},
        TrialEndDate:{header:'TrialEndDate'},
        PrmValueId:{header:'PrmValueId'},
        Currency:{header:'Currency'},
        SrvType:{header:'SrvType'},
        SrvSubtype:{header:'SrvSubtype'},
        OvwAdvCharge:{header:'OvwAdvCharge'},
        AdvCharge:{header:'AdvCharge'},
        AdvChargePrd:{header:'AdvChargePrd'},
        DeleteFlag:{header:'DeleteFlag'},
        RecVersion:{header:'RecVersion'},
        AttribHistno:{header:'AttribHistno'},
        AttribHistnoNnp:{header:'AttribHistnoNnp'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readContractAll?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readContractAll = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readContractAll(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchContractAll');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var contrDevices = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchContrDevices(jsonObj,function(err,rows) {
                jsonObj.contrDevices = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var contrServicesCap = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchContrServicesCap(jsonObj,function(err,rows) {
                jsonObj.contrServicesCap = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var contractHistory = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchContractHistory(jsonObj,function(err,rows) {
                jsonObj.contractHistory = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var infoContrCheck = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchInfoContrCheck(jsonObj,function(err,rows) {
                jsonObj.infoContrCheck = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var infoContrCombo = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchInfoContrCombo(jsonObj,function(err,rows) {
                jsonObj.infoContrCombo = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var infoContrText = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchInfoContrText(jsonObj,function(err,rows) {
                jsonObj.infoContrText = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var profileService = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchProfileService(jsonObj,function(err,rows) {
                jsonObj.profileService = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('ContractAllReadPage',parameter);
    }    
    Promise.all([readContractAll,contrDevices,contrServicesCap,contractHistory,infoContrCheck,infoContrCombo,infoContrText,profileService]).then(sendResult);
});

module.exports = router;
