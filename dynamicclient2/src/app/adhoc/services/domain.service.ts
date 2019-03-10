import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { DomainModel } from '../interfaces/domain-model';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DomainService {


  ELEMENT_DATA: DomainModel[] = [
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

  constructor() { }

  getDomains(): Observable<DomainModel[]> {
    return of(this.ELEMENT_DATA); // this. fieldSubject.asObservable();
  }

  getDomainById(id: number) {
    return from(this.ELEMENT_DATA).pipe(
      filter(data => data.domainId === id),
      first()
    );
  }
}
