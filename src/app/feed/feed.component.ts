import { Component, OnInit,Input } from '@angular/core';
import { Opinion } from "../shared/opinion";
import { FeedService } from "../services/feed.service";
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feeds:Opinion[];
  errMess:string
  constructor(private FeedService:FeedService) { }

  ngOnInit() {
    
  }

}
