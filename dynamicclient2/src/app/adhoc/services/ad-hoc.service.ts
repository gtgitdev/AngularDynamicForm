import { Injectable } from '@angular/core';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';
import { Observable, throwError } from 'rxjs';
import {  tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomainModel } from '../interfaces/domain-model';
import { DomainService } from './domain.service';



@Injectable({
  providedIn: 'root'
})
export class AdHocService {

//#region service properties
private currentDomain: DomainModel;
private currentDocument: AdhocDocumentModel;

  public get CurrentDomain(): DomainModel {
    return this.currentDomain;
  }

  public set CurrentDomain(value: DomainModel) {
    this.currentDomain = value;
    console.log(this.CurrentDomain);
  }

  public get CurrentDocument(): AdhocDocumentModel {
    return this.currentDocument;
  }

  public set CurrentDocument(value: AdhocDocumentModel) {
    this.currentDocument = value;
    console.log(this.CurrentDocument);
  }

//#endregion

  private adHocDocumentsUrl = 'https://localhost:44350/api/adhocdocuments';

  constructor(private http: HttpClient,
              private domainService: DomainService) { }

  getDocumentsByDomainId(id: number): Observable<AdhocDocumentModel[]> {
    return this.http.get<AdhocDocumentModel[]>(`${this.adHocDocumentsUrl}/domain/${id}`)
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

getDocumentById(id: number): Observable<AdhocDocumentModel> {
  return this.http.get<AdhocDocumentModel>(`${this.adHocDocumentsUrl}/${id}`)
  .pipe(
    // tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
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
