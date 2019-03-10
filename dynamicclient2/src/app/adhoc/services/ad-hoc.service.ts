import { Injectable } from '@angular/core';
import { AdhocDocumentModel } from '../interfaces/adhoc-document-model';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdHocService {

  ELEMENT_DATA: AdhocDocumentModel[] = [
    {
      domainId: 1,
      documentId: 1,
      documentName: 'Ad Hoc Document One',
      documentDescription: 'This is the first document description',

    },
    {
      domainId: 1,
      documentId: 2,
      documentName: 'Ad Hoc Document Two',
      documentDescription: 'This is the second document description',

    },
    {
      domainId: 1,
      documentId: 3,
      documentName: 'Ad Hoc Document Three',
      documentDescription: 'This is the third document description',
    },
    {
      domainId: 1,
      documentId: 4,
      documentName: 'Ad Hoc Document Four',
      documentDescription: 'This is the fourth document description',
    },

  ];

  constructor() { }

  getDocumentsByDomainId(id: number): Observable<AdhocDocumentModel[]> {
    return of(this.ELEMENT_DATA); // this. fieldSubject.asObservable();
  }
}
