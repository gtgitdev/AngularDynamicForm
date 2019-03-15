import { Injectable } from '@angular/core';
import { FieldBase } from '../dynamic/field-base';

@Injectable({
  providedIn: 'root'
})
export class DynamicformService {

  ELEMENT_DATA: FieldBase[] =  [
    { value: 1,
      key: 'FirstName',
      label: 'First Name',
      required: false,
      order: 1,
      controlType: 'textbox',
      controlSize: 1,
      controlGroup: '',
      groupSize: 0
    },
    { value: 2,
      key: 'LastName',
      label: 'Last Name',
      required: false,
      order: 2,
      controlType: 'textbox',
      controlSize: 1,
      controlGroup: '',
      groupSize: 0
    },

  ];

  constructor() {
    // this.fieldSubject = new BehaviorSubject<FieldBase[]>(this.ELEMENT_DATA);
    // console.log(this.fieldSubject);
   }

  // getFields(): Observable<FieldBase[]> {
  //   return this.fieldSubject.asObservable();
  // }
}
