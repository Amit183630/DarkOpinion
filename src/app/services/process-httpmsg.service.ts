import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }
  public handleError(error:HttpErrorResponse|any){
    console.log(error);

    let errMsg:string;
    if(error instanceof ErrorEvent){
      errMsg=error.error.message;
    } else {
      errMsg=`${error.status}-${error.statusText||''} ${error.error}`;
    }
    return throwError(errMsg);
  }
}
