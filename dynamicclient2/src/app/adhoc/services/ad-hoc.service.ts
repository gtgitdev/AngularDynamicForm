import { Injectable } from '@angular/core';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';
import { Observable, throwError } from 'rxjs';
import {  tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdHocService {

  private adHocDocumentsUrl = 'https://localhost:44350/api/adhocdocuments';

  constructor(private http: HttpClient) { }

  getDocumentsByDomainId(id: number): Observable<AdhocDocumentModel[]> {
    return this.http.get<AdhocDocumentModel[]>(`${this.adHocDocumentsUrl}/domain/${id}`)
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getDomainById(id: number) {
    return null;
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
