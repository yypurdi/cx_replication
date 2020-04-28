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
    Title:'AppUsersRead',
    Heading:'AppUsers',
    Username:{label :'Username'},
    Password:{label :'Password'},
    Name:{label :'Name'},
    Email:{label :'Email'},
    Phone:{label :'Phone'},
    Mobile:{label :'Mobile'},
    Enabled:{label :'Enabled'},
    Keycode:{label :'Keycode'},
    AppAuthorities:{Heading:'AppAuthorities',
        Username:{header:'Username'},
        Authority:{header:'Authority'},
        },
    AppContact:{Heading:'AppContact',
        Username:{header:'Username'},
        Subscription:{header:'Subscription'},
        Jid:{header:'Jid'},
        Nickname:{header:'Nickname'},
        Joindate:{header:'Joindate'},
        Show:{header:'Show'},
        Status:{header:'Status'},
        Lastseen:{header:'Lastseen'},
        Unread:{header:'Unread'},
        Key:{header:'Key'},
        },
    AppGroupMembers:{Heading:'AppGroupMembers',
        GroupId:{header:'GroupId'},
        GroupMemberId:{header:'GroupMemberId'},
        Username:{header:'Username'},
        },
    AppMessage:{Heading:'AppMessage',
        Username:{header:'Username'},
        Jid:{header:'Jid'},
        Msgtime:{header:'Msgtime'},
        Msgtype:{header:'Msgtype'},
        Msgsubject:{header:'Msgsubject'},
        Msgtext:{header:'Msgtext'},
        },
    AppPersistentLogins:{Heading:'AppPersistentLogins',
        Username:{header:'Username'},
        Series:{header:'Series'},
        Token:{header:'Token'},
        LastUsed:{header:'LastUsed'},
        },
    AppRoom:{Heading:'AppRoom',
        MeetingRoom:{header:'MeetingRoom'},
        Subject:{header:'Subject'},
        Participant:{header:'Participant'},
        StartDate:{header:'StartDate'},
        EndDate:{header:'EndDate'},
        Status:{header:'Status'},
        RefValue:{header:'RefValue'},
        },
    }

router.get('/', sessionChecker, function(req, res, next) {
    var jsonObj = req.query;
    jsonObj.rowid = 0;
    req.session.previouspath = 'readAppUsers?'+req._parsedUrl.query;
    parameter = {
        session: req.session,
        cookies: req.cookies,
        resource: appresource,
        dateFormat: dateFormat,
    }
    var readAppUsers = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.readAppUsers(jsonObj,function(err,rows) {
                if(err) res.status(err.code).end();
                else{
                    if(rows[0]===undefined) res.redirect('/searchAppUsers');
                    else{ 
                        jsonObj = rows[0];
                        resolve(jsonObj);
                    }
                }
            });
        },1000);
    });
    
    var appAuthorities = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppAuthorities(jsonObj,function(err,rows) {
                jsonObj.appAuthorities = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var appContact = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppContact(jsonObj,function(err,rows) {
                jsonObj.appContact = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var appGroupMembers = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppGroupMembers(jsonObj,function(err,rows) {
                jsonObj.appGroupMembers = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var appMessage = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppMessage(jsonObj,function(err,rows) {
                jsonObj.appMessage = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var appPersistentLogins = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppPersistentLogins(jsonObj,function(err,rows) {
                jsonObj.appPersistentLogins = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var appRoom = new Promise((resolve, reject) => {
        setTimeout(() => {
            dao.searchAppRoom(jsonObj,function(err,rows) {
                jsonObj.appRoom = rows;
                resolve(jsonObj);
            });
        },1000);
    });
    
    var sendResult = (results) => {
        console.log(jsonObj)
        parameter.record = jsonObj;        
        res.render('AppUsersReadPage',parameter);
    }    
    Promise.all([readAppUsers,appAuthorities,appContact,appGroupMembers,appMessage,appPersistentLogins,appRoom]).then(sendResult);
});

module.exports = router;
