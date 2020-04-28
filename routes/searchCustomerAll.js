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
    Title:'CustomerAllSearch',
    Heading:'CustomerAll',
    CustomerId:{label :'CustomerId'},
    CustomerIdHigh:{label :'CustomerIdHigh'},
    Custcode:{label :'Custcode'},
    Csst:{label :'Csst'},
    Cstype:{label :'Cstype'},
    Csactivated:{label :'Csactivated'},
    Csdeactivated:{label :'Csdeactivated'},
    CstypeDate:{label :'CstypeDate'},
    Cslevel:{label :'Cslevel'},
    Cslvlname:{label :'Cslvlname'},
    Tmcode:{label :'Tmcode'},
    Prgcode:{label :'Prgcode'},
    Csclimit:{label :'Csclimit'},
    Cscurbalance:{label :'Cscurbalance'},
    Csdepdate:{label :'Csdepdate'},
    Cstestbillrun:{label :'Cstestbillrun'},
    BillLayout:{label :'BillLayout'},
    Paymntresp:{label :'Paymntresp'},
    TargetReached:{label :'TargetReached'},
    Pcsmethpaymnt:{label :'Pcsmethpaymnt'},
    DunningFlag:{label :'DunningFlag'},
    CommNo:{label :'CommNo'},
    PosCommType:{label :'PosCommType'},
    BtxPassword:{label :'BtxPassword'},
    BtxUser:{label :'BtxUser'},
    SettlesPMonth:{label :'SettlesPMonth'},
    Cashretour:{label :'Cashretour'},
    Cstradecode:{label :'Cstradecode'},
    Cspassword:{label :'Cspassword'},
    Cspromotion:{label :'Cspromotion'},
    Csreason:{label :'Csreason'},
    Cscollector:{label :'Cscollector'},
    Cscontresp:{label :'Cscontresp'},
    Csdeposit:{label :'Csdeposit'},
    CscreditDate:{label :'CscreditDate'},
    CscreditRemark:{label :'CscreditRemark'},
    Suspended:{label :'Suspended'},
    Reactivated:{label :'Reactivated'},
    PrevBalance:{label :'PrevBalance'},
    LbcDate:{label :'LbcDate'},
    CrlimitExc:{label :'CrlimitExc'},
    AreaId:{label :'AreaId'},
    CostcenterId:{label :'CostcenterId'},
    Csfedtaxid:{label :'Csfedtaxid'},
    CreditRating:{label :'CreditRating'},
    CscreditStatus:{label :'CscreditStatus'},
    DeactCreateDate:{label :'DeactCreateDate'},
    DeactReceipDate:{label :'DeactReceipDate'},
    EdifactAddr:{label :'EdifactAddr'},
    EdifactUserFlag:{label :'EdifactUserFlag'},
    EdifactFlag:{label :'EdifactFlag'},
    CsdepositDueDate:{label :'CsdepositDueDate'},
    CalculateDeposit:{label :'CalculateDeposit'},
    TmcodeDate:{label :'TmcodeDate'},
    Csrentalbc:{label :'Csrentalbc'},
    UserLastmod:{label :'UserLastmod'},
    Csentdate:{label :'Csentdate'},
    Csmoddate:{label :'Csmoddate'},
    Csmod:{label :'Csmod'},
    CustomerIdExt:{label :'CustomerIdExt'},
    CsclimitOTr1:{label :'CsclimitOTr1'},
    CsclimitOTr2:{label :'CsclimitOTr2'},
    CsclimitOTr3:{label :'CsclimitOTr3'},
    CscreditScore:{label :'CscreditScore'},
    Cstraderef:{label :'Cstraderef'},
    Wpid:{label :'Wpid'},
    Csprepayment:{label :'Csprepayment'},
    Csremark1:{label :'Csremark1'},
    Csremark2:{label :'Csremark2'},
    BillInformation:{label :'BillInformation'},
    DealerId:{label :'DealerId'},
    DunningMode:{label :'DunningMode'},
    NotValid:{label :'NotValid'},
    CscrdcheckAgreed:{label :'CscrdcheckAgreed'},
    ExpectPayCurrId:{label :'ExpectPayCurrId'},
    ConvratetypePayment:{label :'ConvratetypePayment'},
    RefundCurrId:{label :'RefundCurrId'},
    ConvratetypeRefund:{label :'ConvratetypeRefund'},
    Srcode:{label :'Srcode'},
    Currency:{label :'Currency'},
    RecVersion:{label :'RecVersion'},
    AnonymousCustomer:{label :'AnonymousCustomer'},
    ExternalCustomerId:{label :'ExternalCustomerId'},
    ExternalCustomerSetId:{label :'ExternalCustomerSetId'},
    Custnum:{label :'Custnum'},
    BusinessUnitId:{label :'BusinessUnitId'},
    PartyTypeId:{label :'PartyTypeId'},
    IndividualOverdiscFlag:{label :'IndividualOverdiscFlag'},
    BillingThreshold:{label :'BillingThreshold'},
    BillingThresholdCurrency:{label :'BillingThresholdCurrency'},
    ThresholdBillingMode:{label :'ThresholdBillingMode'},
    ThresholdBillingPurpose:{label :'ThresholdBillingPurpose'},
    CollectionInd:{label :'CollectionInd'},
    RrCandidate:{label :'RrCandidate'},
    BchLastRunDate:{label :'BchLastRunDate'},
    CreatedByUser:{label :'CreatedByUser'},
    CustomerAll:{Heading:'CustomerAll',
        CustomerId:{header:'CustomerId'},
        CustomerIdHigh:{header:'CustomerIdHigh'},
        Custcode:{header:'Custcode'},
        Csst:{header:'Csst'},
        Cstype:{header:'Cstype'},
        Csactivated:{header:'Csactivated'},
        Csdeactivated:{header:'Csdeactivated'},
        CstypeDate:{header:'CstypeDate'},
        Cslevel:{header:'Cslevel'},
        Cslvlname:{header:'Cslvlname'},
        Tmcode:{header:'Tmcode'},
        Prgcode:{header:'Prgcode'},
        Csclimit:{header:'Csclimit'},
        Cscurbalance:{header:'Cscurbalance'},
        Csdepdate:{header:'Csdepdate'},
        Cstestbillrun:{header:'Cstestbillrun'},
        BillLayout:{header:'BillLayout'},
        Paymntresp:{header:'Paymntresp'},
        TargetReached:{header:'TargetReached'},
        Pcsmethpaymnt:{header:'Pcsmethpaymnt'},
        DunningFlag:{header:'DunningFlag'},
        CommNo:{header:'CommNo'},
        PosCommType:{header:'PosCommType'},
        BtxPassword:{header:'BtxPassword'},
        BtxUser:{header:'BtxUser'},
        SettlesPMonth:{header:'SettlesPMonth'},
        Cashretour:{header:'Cashretour'},
        Cstradecode:{header:'Cstradecode'},
        Cspassword:{header:'Cspassword'},
        Cspromotion:{header:'Cspromotion'},
        Csreason:{header:'Csreason'},
        Cscollector:{header:'Cscollector'},
        Cscontresp:{header:'Cscontresp'},
        Csdeposit:{header:'Csdeposit'},
        CscreditDate:{header:'CscreditDate'},
        CscreditRemark:{header:'CscreditRemark'},
        Suspended:{header:'Suspended'},
        Reactivated:{header:'Reactivated'},
        PrevBalance:{header:'PrevBalance'},
        LbcDate:{header:'LbcDate'},
        CrlimitExc:{header:'CrlimitExc'},
        AreaId:{header:'AreaId'},
        CostcenterId:{header:'CostcenterId'},
        Csfedtaxid:{header:'Csfedtaxid'},
        CreditRating:{header:'CreditRating'},
        CscreditStatus:{header:'CscreditStatus'},
        DeactCreateDate:{header:'DeactCreateDate'},
        DeactReceipDate:{header:'DeactReceipDate'},
        EdifactAddr:{header:'EdifactAddr'},
        EdifactUserFlag:{header:'EdifactUserFlag'},
        EdifactFlag:{header:'EdifactFlag'},
        CsdepositDueDate:{header:'CsdepositDueDate'},
        CalculateDeposit:{header:'CalculateDeposit'},
        TmcodeDate:{header:'TmcodeDate'},
        Csrentalbc:{header:'Csrentalbc'},
        UserLastmod:{header:'UserLastmod'},
        Csentdate:{header:'Csentdate'},
        Csmoddate:{header:'Csmoddate'},
        Csmod:{header:'Csmod'},
        CustomerIdExt:{header:'CustomerIdExt'},
        CsclimitOTr1:{header:'CsclimitOTr1'},
        CsclimitOTr2:{header:'CsclimitOTr2'},
        CsclimitOTr3:{header:'CsclimitOTr3'},
        CscreditScore:{header:'CscreditScore'},
        Cstraderef:{header:'Cstraderef'},
        Wpid:{header:'Wpid'},
        Csprepayment:{header:'Csprepayment'},
        Csremark1:{header:'Csremark1'},
        Csremark2:{header:'Csremark2'},
        BillInformation:{header:'BillInformation'},
        DealerId:{header:'DealerId'},
        DunningMode:{header:'DunningMode'},
        NotValid:{header:'NotValid'},
        CscrdcheckAgreed:{header:'CscrdcheckAgreed'},
        ExpectPayCurrId:{header:'ExpectPayCurrId'},
        ConvratetypePayment:{header:'ConvratetypePayment'},
        RefundCurrId:{header:'RefundCurrId'},
        ConvratetypeRefund:{header:'ConvratetypeRefund'},
        Srcode:{header:'Srcode'},
        Currency:{header:'Currency'},
        RecVersion:{header:'RecVersion'},
        AnonymousCustomer:{header:'AnonymousCustomer'},
        ExternalCustomerId:{header:'ExternalCustomerId'},
        ExternalCustomerSetId:{header:'ExternalCustomerSetId'},
        Custnum:{header:'Custnum'},
        BusinessUnitId:{header:'BusinessUnitId'},
        PartyTypeId:{header:'PartyTypeId'},
        IndividualOverdiscFlag:{header:'IndividualOverdiscFlag'},
        BillingThreshold:{header:'BillingThreshold'},
        BillingThresholdCurrency:{header:'BillingThresholdCurrency'},
        ThresholdBillingMode:{header:'ThresholdBillingMode'},
        ThresholdBillingPurpose:{header:'ThresholdBillingPurpose'},
        CollectionInd:{header:'CollectionInd'},
        RrCandidate:{header:'RrCandidate'},
        BchLastRunDate:{header:'BchLastRunDate'},
        CreatedByUser:{header:'CreatedByUser'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    req.session.previouspath = 'searchCustomerAll?'+req._parsedUrl.query;
    dao.searchCustomerAll(jsonObj,function(err,rows) {
        parameter = {
            session: req.session,
            cookies: req.cookies,
            resource: appresource,
            dateFormat: dateFormat,
            records: rows,
        }
        res.render('CustomerAllSearchPage',parameter);
        //console.log(parameter);        
    })
});

module.exports = router;
