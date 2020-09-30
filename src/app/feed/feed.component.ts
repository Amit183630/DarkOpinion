import { Component, OnInit } from '@angular/core';
import { Opinion } from "../shared/opinion";
import { FeedService } from "../services/feed.service";
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feeds:Opinion[];
  errMess:string
  constructor(private FeedService:FeedService) { }

  ngOnInit() {
    this.FeedService.getFeeds().
    subscribe(feeds=>{this.feeds=feeds;console.log(this.feeds)},
    errMess=>this.errMess=errMess);
  }

}
