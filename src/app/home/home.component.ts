import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Opinion } from "../shared/opinion";

import { FeedService } from "../services/feed.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('oform') opinionFormDirective;
  errMess:string;
  opinionForm:FormGroup;
  feeds:Opinion[];
  showSpinner=false;
  constructor(private fb:FormBuilder,private feedService:FeedService) { 
    this.createForm();
  }

  ngOnInit() {
    this.feedService.getFeeds().subscribe(feeds=>{
      this.feeds=feeds;
    },
    err=>{
      this.errMess=<any>err;
    });
  }
  createForm(){
    this.opinionForm=this.fb.group({
      description:['',Validators.required],
      username:['Dark-TestUser',Validators.required]
    })
  }
  onSubmit(){
    this.showSpinner=true;
    this.feedService.postOpinion(this.opinionForm.value)
    .subscribe(opinion=>{
      console.log(opinion);
      this.showSpinner=false;
      this.feedService.getFeeds().subscribe(feeds=>{
        this.feeds=feeds.reverse();
      },
      err=>{
        this.errMess=<any>err;
        this.showSpinner=false;
      });
    },
    err=>{
      this.errMess=<any>err;
      this.showSpinner=false;
    });
  }

}
