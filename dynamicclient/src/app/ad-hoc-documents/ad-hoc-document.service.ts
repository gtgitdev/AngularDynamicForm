import { Injectable } from '@angular/core';
import { Adhocdocument } from './interfaces/adhocdocument';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdHocDocumentService {

  documents: Adhocdocument[] =
  [
    {domainId: 2, documentId: 1, documentName: 'Test', documentDescription: ''},
    {domainId: 2, documentId: 2, documentName: 'Test2', documentDescription: ''},

  ];


  constructor() { }

  getDocuments(domainId: number): Observable<Adhocdocument[]> {
    return of(this.documents);
  }
}

