import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, of } from 'rxjs';
import { DomainDocument } from '../models/domain-document';
import { from } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DomainManagerService {

  ELEMENT_DATA: DomainDocument[] = [
    {
      domainId: 1,
      domainName: 'First Domain',
      domainDescription: 'This is the domain of the first dynamic document repository',

    },
    {
      domainId: 2,
      domainName: 'Second Domain',
      domainDescription: 'This is the domain of the Second dynamic document repository',

    },
    {
      domainId: 3,
      domainName: 'Third Domain',
      domainDescription: 'This is the domain of the Third dynamic document repository',
    },
    {
      domainId: 4,
      domainName: 'Forth Domain',
      domainDescription: 'This is the domain of the Forth dynamic document repository',
    },

  ];

  private fieldSubject: BehaviorSubject<DomainDocument[]>;

  constructor() {
    // this.fieldSubject = new BehaviorSubject<DomainDocument[]>(this.ELEMENT_DATA);
    // console.log(this.fieldSubject);
  }

  getDomains(): Observable<DomainDocument[]> {
    return of(this.ELEMENT_DATA); // this. fieldSubject.asObservable();
  }

  getDomainById(id: number) {
    return from(this.ELEMENT_DATA).pipe(
      filter(data => data.domainId === id),
      first()
    );
  }
}
