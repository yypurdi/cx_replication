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
    Title:'OrderhdrAllRead',
    Heading:'OrderhdrAll',
    Ohxact:{label :'Ohxact'},
    Ohstatus:{label :'Ohstatus'},
    Ohstatusflg:{label :'Ohstatusflg'},
    Ohentdate:{label :'Ohentdate'},
    Ohrefnum:{label :'Ohrefnum'},
    Ohtshdate:{label :'Ohtshdate'},
    Ohsls:{label :'Ohsls'},
    CustomerId:{label :'CustomerId'},
    Ohcseq:{label :'Ohcseq'},
    Ohsname:{label :'Ohsname'},
    Ohsaddr1:{label :'Ohsaddr1'},
    Ohsaddr2:{label :'Ohsaddr2'},
    Ohsaddr3:{label :'Ohsaddr3'},
    Ohscity:{label :'Ohscity'},
    Ohsst:{label :'Ohsst'},
    Ohszip:{label :'Ohszip'},
    Ohscountry:{label :'Ohscountry'},
    Ohscrc:{label :'Ohscrc'},
    Ohattn:{label :'Ohattn'},
    Ohtrucker:{label :'Ohtrucker'},
    Ohponum:{label :'Ohponum'},
    Ohrelease:{label :'Ohrelease'},
    Ohpsno:{label :'Ohpsno'},
    Ohfrtterms:{label :'Ohfrtterms'},
    Ohordtyp:{label :'Ohordtyp'},
    Ohcandate:{label :'Ohcandate'},
    Ohassocxact:{label :'Ohassocxact'},
    Ohprt1:{label :'Ohprt1'},
    Ohprt2:{label :'Ohprt2'},
    Ohprt3:{label :'Ohprt3'},
    Ohuserid:{label :'Ohuserid'},
    Ohrefdate:{label :'Ohrefdate'},
    Ohshpdate:{label :'Ohshpdate'},
    Ohduedate:{label :'Ohduedate'},
    Ohipp:{label :'Ohipp'},
    Ohilpp:{label :'Ohilpp'},
    Ohpostgl:{label :'Ohpostgl'},
    Ohpostar:{label :'Ohpostar'},
    OharcustomerId:{label :'OharcustomerId'},
    Ohglar:{label :'Ohglar'},
    Ohdisdate:{label :'Ohdisdate'},
    DdebitFlag:{label :'DdebitFlag'},
    Oharflg:{label :'Oharflg'},
    Ohinvtype:{label :'Ohinvtype'},
    Ohfulfildate:{label :'Ohfulfildate'},
    OhpaymentId:{label :'OhpaymentId'},
    Ohpostfibu:{label :'Ohpostfibu'},
    Ohreason:{label :'Ohreason'},
    OhrsId:{label :'OhrsId'},
    Ohddhflag:{label :'Ohddhflag'},
    Ohddhdate:{label :'Ohddhdate'},
    Ohfct:{label :'Ohfct'},
    Ohlct:{label :'Ohlct'},
    Ohmod:{label :'Ohmod'},
    Ohxrate:{label :'Ohxrate'},
    Oheccode:{label :'Oheccode'},
    Ohecname:{label :'Ohecname'},
    Ohglexact:{label :'Ohglexact'},
    Ohdunstep:{label :'Ohdunstep'},
    Ohflfct:{label :'Ohflfct'},
    Ohfllct:{label :'Ohfllct'},
    CoId:{label :'CoId'},
    Complaint:{label :'Complaint'},
    ComplaintDate:{label :'ComplaintDate'},
    RtxStatus:{label :'RtxStatus'},
    Ohbillseqno:{label :'Ohbillseqno'},
    Ohcancelflag:{label :'Ohcancelflag'},
    ConvdateExchange:{label :'ConvdateExchange'},
    OhglexactTax:{label :'OhglexactTax'},
    GlacodeDiff:{label :'GlacodeDiff'},
    JobcostIdDiff:{label :'JobcostIdDiff'},
    TaxRoundingFlag:{label :'TaxRoundingFlag'},
    GlCurrency:{label :'GlCurrency'},
    DocumentCurrency:{label :'DocumentCurrency'},
    DocumentConvratetypeId:{label :'DocumentConvratetypeId'},
    SecondaryCurrency:{label :'SecondaryCurrency'},
    SecondaryConvratetypeId:{label :'SecondaryConvratetypeId'},
    OhinvamtGl:{label :'OhinvamtGl'},
    OhopnamtGl:{label :'OhopnamtGl'},
    OhdisamtGl:{label :'OhdisamtGl'},
    OhdistakamtGl:{label :'OhdistakamtGl'},
    OhtaxamtGl:{label :'OhtaxamtGl'},
    TaxamtDiffGl:{label :'TaxamtDiffGl'},
    OhinvamtDoc:{label :'OhinvamtDoc'},
    OhopnamtDoc:{label :'OhopnamtDoc'},
    OhdisamtDoc:{label :'OhdisamtDoc'},
    OhdistakamtDoc:{label :'OhdistakamtDoc'},
    OhtaxamtDoc:{label :'OhtaxamtDoc'},
    GlConvratetypeId:{label :'GlConvratetypeId'},
    FeeBalance:{label :'FeeBalance'},
    FeeBalanceGross:{label :'FeeBalanceGross'},
    Currency:{label :'Currency'},
    Ohcostcent:{label :'Ohcostcent'},
    RecVersion:{label :'RecVersion'},
    OhinvamtSecdoc:{label :'OhinvamtSecdoc'},
    TaxamtDiffSecdoc:{label :'TaxamtDiffSecdoc'},
    Paymentfailed:{label :'Paymentfailed'},
    BillingAccountId:{label :'BillingAccountId'},
    BalancePageEventDate:{label :'BalancePageEventDate'},
    PrepaidBalanceChangeDoc:{label :'PrepaidBalanceChangeDoc'},
    PrepaidBalanceChangeGl:{label :'PrepaidBalanceChangeGl'},
    PrepaidGlacode:{label :'PrepaidGlacode'},
    PrepaidTaxamtDiffGl:{label :'PrepaidTaxamtDiffGl'},
    PrepaidTaxDiffGlacode:{label :'PrepaidTaxDiffGlacode'},
    PaymentConditionId:{label :'PaymentConditionId'},
    Ohdocstatus:{label :'Ohdocstatus'},
    Ohextrefdate:{label :'Ohextrefdate'},
    Ohextrefnum:{label :'Ohextrefnum'},
    Ohcmident:{label :'Ohcmident'},
    Ohremark:{label :'Ohremark'},
    OhdiscbaseDoc:{label :'OhdiscbaseDoc'},
    Ohproppaycurr:{label :'Ohproppaycurr'},
    Ohproppaydate:{label :'Ohproppaydate'},
    OhprocessType:{label :'OhprocessType'},
    OhprocessDate:{label :'OhprocessDate'},
    BusinessUnitId:{label :'BusinessUnitId'},
    ProposedPaymentMethod:{label :'ProposedPaymentMethod'},
    ReasonId:{label :'ReasonId'},
    IncomingDocPricingType:{label :'IncomingDocPricingType'},
    IncomingDocTaxPerItem:{label :'IncomingDocTaxPerItem'},
    PaymentProposalId:{label :'PaymentProposalId'},
    Ordertrailer:{Heading:'Ordertrailer',
        Otxact:{header:'Otxact'},
        Otseq:{header:'Otseq'},
        Otmeas:{header:'Otmeas'},
        Otum:{header:'Otum'},
        Otup:{header:'Otup'},
        Otqord:{header:'Otqord'},
        Otqbkord:{header:'Otqbkord'},
        Otqtoshp:{header:'Otqtoshp'},
        Otdftprc:{header:'Otdftprc'},
        Otprgroup:{header:'Otprgroup'},
        Otfrtwgt:{header:'Otfrtwgt'},
        Otjobcost:{header:'Otjobcost'},
        Otname:{header:'Otname'},
        Otglsale:{header:'Otglsale'},
        Otglcogs:{header:'Otglcogs'},
        Otglinv:{header:'Otglinv'},
        Otqship:{header:'Otqship'},
        Otprmeas:{header:'Otprmeas'},
        Otprum:{header:'Otprum'},
        Otbillunits:{header:'Otbillunits'},
        Otinvunits:{header:'Otinvunits'},
        Otcostflg:{header:'Otcostflg'},
        Otinvalloc:{header:'Otinvalloc'},
        Otshipdate:{header:'Otshipdate'},
        Sncode:{header:'Sncode'},
        OteqId:{header:'OteqId'},
        Oteqrate:{header:'Oteqrate'},
        Otleasing:{header:'Otleasing'},
        OtleasFinish:{header:'OtleasFinish'},
        Otflsqn:{header:'Otflsqn'},
        Otvplmn:{header:'Otvplmn'},
        Otflname:{header:'Otflname'},
        Otfct:{header:'Otfct'},
        Otlct:{header:'Otlct'},
        OtsimFrom:{header:'OtsimFrom'},
        OtsimTo:{header:'OtsimTo'},
        OttransactionDate:{header:'OttransactionDate'},
        ServcatCode:{header:'ServcatCode'},
        ServCode:{header:'ServCode'},
        ServType:{header:'ServType'},
        TaxInclusiveInd:{header:'TaxInclusiveInd'},
        OtglDisc:{header:'OtglDisc'},
        OtjcidDisc:{header:'OtjcidDisc'},
        OtglMincom:{header:'OtglMincom'},
        OtjcidMincom:{header:'OtjcidMincom'},
        GlCurrency:{header:'GlCurrency'},
        DocumentCurrency:{header:'DocumentCurrency'},
        OtamtDiscGl:{header:'OtamtDiscGl'},
        OtamtDiscGrossGl:{header:'OtamtDiscGrossGl'},
        OtamtMincomGl:{header:'OtamtMincomGl'},
        OtamtMincomGrossGl:{header:'OtamtMincomGrossGl'},
        OtamtRevenueGl:{header:'OtamtRevenueGl'},
        OtamtRevenueGrossGl:{header:'OtamtRevenueGrossGl'},
        OtcuramtDiscGl:{header:'OtcuramtDiscGl'},
        OtcuramtDiscGrossGl:{header:'OtcuramtDiscGrossGl'},
        OtcuramtGl:{header:'OtcuramtGl'},
        OtcuramtGrossGl:{header:'OtcuramtGrossGl'},
        OtcuramtMincomGl:{header:'OtcuramtMincomGl'},
        OtcuramtMincomGrossGl:{header:'OtcuramtMincomGrossGl'},
        OtcuramtRevenueGl:{header:'OtcuramtRevenueGl'},
        OtcuramtRevenueGrossGl:{header:'OtcuramtRevenueGrossGl'},
        OtmerchGl:{header:'OtmerchGl'},
        OtmerchGrossGl:{header:'OtmerchGrossGl'},
        OtamtDiscDoc:{header:'OtamtDiscDoc'},
        OtamtDiscGrossDoc:{header:'OtamtDiscGrossDoc'},
        OtamtMincomDoc:{header:'OtamtMincomDoc'},
        OtamtMincomGrossDoc:{header:'OtamtMincomGrossDoc'},
        OtamtRevenueDoc:{header:'OtamtRevenueDoc'},
        OtamtRevenueGrossDoc:{header:'OtamtRevenueGrossDoc'},
        OtcuramtDiscDoc:{header:'OtcuramtDiscDoc'},
        OtcuramtDiscGrossDoc:{header:'OtcuramtDiscGrossDoc'},
        OtcuramtDoc:{header:'OtcuramtDoc'},
        OtcuramtGrossDoc:{header:'OtcuramtGrossDoc'},
        OtcuramtMincomDoc:{header:'OtcuramtMincomDoc'},
        OtcuramtMincomGrossDoc:{header:'OtcuramtMincomGrossDoc'},
        OtcuramtRevenueDoc:{header:'OtcuramtRevenueDoc'},
        OtcuramtRevenueGrossDoc:{header:'OtcuramtRevenueGrossDoc'},
        OtgpriceDisDoc:{header:'OtgpriceDisDoc'},
        OtgpriceDoc:{header:'OtgpriceDoc'},
        OtmerchDoc:{header:'OtmerchDoc'},
        OtmerchGrossDoc:{header:'OtmerchGrossDoc'},
        OttaxExemptedDoc:{header:'OttaxExemptedDoc'},
        RecVersion:{header:'RecVersion'},
        OtamtDiscSecdoc:{header:'OtamtDiscSecdoc'},
        OtamtDiscGrossSecdoc:{header:'OtamtDiscGrossSecdoc'},
        OtamtMincomSecdoc:{header:'OtamtMincomSecdoc'},
        OtamtMincomGrossSecdoc:{header:'OtamtMincomGrossSecdoc'},
        OtamtRevenueSecdoc:{header:'OtamtRevenueSecdoc'},
        OtamtRevenueGrossSecdoc:{header:'OtamtRevenueGrossSecdoc'},
        OtgpriceSecdoc:{header:'OtgpriceSecdoc'},
        OtgpriceDisSecdoc:{header:'OtgpriceDisSecdoc'},
        OtmerchSecdoc:{header:'OtmerchSecdoc'},
        OtmerchGrossSecdoc:{header:'OtmerchGrossSecdoc'},
        Otflrapflg:{header:'Otflrapflg'},
        TapRefNo:{header:'TapRefNo'},
        TaxCalculationType:{header:'TaxCalculationType'},
        ProfileId:{header:'ProfileId'},
        PaymentOption:{header:'PaymentOption'},
        BpCoId:{header:'BpCoId'},
        Otcostcent:{header:'Otcostcent'},
        Otordnum:{header:'Otordnum'},
        IncomingDocTaxItemSeqno:{header:'IncomingDocTaxItemSeqno'},
        Tmcode:{header:'Tmcode'},
        RateplanVscode:{header:'RateplanVscode'},
        Spcode:{header:'Spcode'},
        InvoiceItemClassId:{header:'InvoiceItemClassId'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readOrderhdrAll?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readOrderhdrAll = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readOrderhdrAll(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchOrderhdrAll');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var ordertrailer = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchOrdertrailer(jsonObj,function(err,rows) {
                jsonObj.ordertrailer = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('OrderhdrAllReadPage',parameter);
    }    
    Promise.all([readOrderhdrAll,ordertrailer]).then(sendResult);
});

module.exports = router;
