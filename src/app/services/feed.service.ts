import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { delay,map,catchError } from "rxjs/operators";
import { HttpClient,HttpHeaders } from "@angular/common/http";

import { Opinion } from "../shared/opinion";
import {baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from "../services/process-httpmsg.service";
@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http:HttpClient,private processhttpmsg:ProcessHttpmsgService) { }
  getFeeds():Observable<Opinion[]>{
    return this.http.get<Opinion[]>(baseURL+'feeds').pipe(catchError(this.processhttpmsg.handleError));
  }
}
