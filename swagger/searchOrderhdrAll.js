/*
 * script route generated by KOMA
 * @author : Yan Yan Purdiansah
 */    
var express = require('express');
var router = express.Router();
var database = require('./dao');
var dao = new database.Dao();
        
/**
 * @swagger
 * /searchOrderhdrAll:
 *   get:
 *     tags:
 *       - Administration
 *     description: searchOrderhdrAll
 *     summary: OrderhdrAllSearch
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: ohxact
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohstatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohstatusflg
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohentdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohrefnum
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohtshdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohsls
 *         description: String
 *         in: query
 *         type: String
 *       - name: customerId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohcseq
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohsname
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohsaddr1
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohsaddr2
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohsaddr3
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohscity
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohsst
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohszip
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohscountry
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohscrc
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohattn
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohtrucker
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohponum
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohrelease
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohpsno
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohfrtterms
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohordtyp
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohcandate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohassocxact
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohprt1
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohprt2
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohprt3
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohuserid
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohrefdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohshpdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohduedate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohipp
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohilpp
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohpostgl
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohpostar
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: oharcustomerId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohglar
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohdisdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ddebitFlag
 *         description: String
 *         in: query
 *         type: String
 *       - name: oharflg
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohinvtype
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohfulfildate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohpaymentId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohpostfibu
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohreason
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohrsId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohddhflag
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohddhdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohfct
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohlct
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohmod
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohxrate
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: oheccode
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohecname
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohglexact
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohdunstep
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohflfct
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohfllct
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: coId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: complaint
 *         description: String
 *         in: query
 *         type: String
 *       - name: complaintDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: rtxStatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohbillseqno
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohcancelflag
 *         description: String
 *         in: query
 *         type: String
 *       - name: convdateExchange
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohglexactTax
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: glacodeDiff
 *         description: String
 *         in: query
 *         type: String
 *       - name: jobcostIdDiff
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: taxRoundingFlag
 *         description: String
 *         in: query
 *         type: String
 *       - name: glCurrency
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: documentCurrency
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: documentConvratetypeId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: secondaryCurrency
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: secondaryConvratetypeId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohinvamtGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohopnamtGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohdisamtGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohdistakamtGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohtaxamtGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: taxamtDiffGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohinvamtDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohopnamtDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohdisamtDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohdistakamtDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohtaxamtDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: glConvratetypeId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: feeBalance
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: feeBalanceGross
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: currency
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohcostcent
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: recVersion
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohinvamtSecdoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: taxamtDiffSecdoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: paymentfailed
 *         description: String
 *         in: query
 *         type: String
 *       - name: billingAccountId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: balancePageEventDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: prepaidBalanceChangeDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: prepaidBalanceChangeGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: prepaidGlacode
 *         description: String
 *         in: query
 *         type: String
 *       - name: prepaidTaxamtDiffGl
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: prepaidTaxDiffGlacode
 *         description: String
 *         in: query
 *         type: String
 *       - name: paymentConditionId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohdocstatus
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohextrefdate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohextrefnum
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohcmident
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohremark
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohdiscbaseDoc
 *         description: Double
 *         in: query
 *         type: Double
 *       - name: ohproppaycurr
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: ohproppaydate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: ohprocessType
 *         description: String
 *         in: query
 *         type: String
 *       - name: ohprocessDate
 *         description: java.util.Date
 *         in: query
 *         type: java.util.Date
 *       - name: businessUnitId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: proposedPaymentMethod
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: reasonId
 *         description: Integer
 *         in: query
 *         type: Integer
 *       - name: incomingDocPricingType
 *         description: String
 *         in: query
 *         type: String
 *       - name: incomingDocTaxPerItem
 *         description: String
 *         in: query
 *         type: String
 *       - name: paymentProposalId
 *         description: Integer
 *         in: query
 *         type: Integer
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found 
 *       '500':
 *         description: Internal Server Problem
 */    

router.get('/', function(req, res, next) {
    var jsonObj = req.query;
    if(jsonObj.rowid===undefined) jsonObj.rowid = 0;
    dao.searchOrderhdrAll(jsonObj,function(err,rows) {    
        if(err) res.status(err.code).end();
        else {
            jsonObj.orderhdrAll = rows;
            res.status(200).send(jsonObj);
        }
        console.log(jsonObj);        
    });
});

module.exports = router;
