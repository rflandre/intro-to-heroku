import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../services/profile-service';

@Page({
    templateUrl: 'build/pages/profile/profile.html'
})
export class BrokerDetailsPage {

    static get parameters() {
        return [[NavController], [NavParams], [BrokerService]];
    }

    constructor(nav, navParams, brokerService) {
        this.brokerService = brokerService;
        this.broker = navParams.get('broker');
    }

    ngOnInit() {
        this.brokerService.findById(this.broker.id).subscribe(broker => this.broker = broker);
    }

}






var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});