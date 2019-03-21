import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { data1 } from './testhttp/datatype'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':'application/x-www-form-urlencoded'
  /* 'Content-Type':'application/x-www-form-urlencoded';charset=utf-8  */
})

/*   headers: new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
   */
};



@Injectable({
  providedIn: 'root'
})
export class HttpserveService {
  testUrl = 'http://localhost:8080/test1/testhttp.php';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('httpserve');
  }

  adddata(newdata:data1):Observable<data1>{
    const body = new HttpParams().set('name', newdata['name']).set('time', newdata['time']);
    return this.http.post<data1>(this.testUrl,body,httpOptions).pipe(
      catchError(this.handleError('addHero', newdata)));
  }

  httpPostExample() {
    let data = {'name':'0', 'time' : '25'};
    this.http.post(this.testUrl,data,httpOptions)
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body",
                  val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
}

}

